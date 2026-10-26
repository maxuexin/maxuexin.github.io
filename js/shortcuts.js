/* ==========================================================================
   快捷键页面渲染器 —— 两个页面共用
   页面结构只需提供：
     #app[data-view="mine|all"]  数据来源
     #page-title / #page-note    标题与副标题（由数据自动填充）
     #search                     搜索框
     #tab-bar / #boards          标签栏与面板容器（由脚本填充）
     #footer-tip                 页脚提示（自动追加统计）
   ========================================================================== */

(function () {
    'use strict';

    var mount = document.getElementById('app');
    if (!mount) return;

    var viewKey = mount.getAttribute('data-view');
    var dataset = window.SHORTCUT_DATA && window.SHORTCUT_DATA[viewKey];
    if (!dataset) {
        console.error('[快捷键] 找不到数据：' + viewKey);
        return;
    }

    var tabBar = document.getElementById('tab-bar');
    var boards = document.getElementById('boards');
    var searchBox = document.getElementById('search');
    var titleEl = document.getElementById('page-title');
    var noteEl = document.getElementById('page-note');
    var tipEl = document.getElementById('footer-tip');

    var records = [];
    var activeId = null;

    /* ---------------- 构建 DOM ---------------- */

    function el(tag, className, text) {
        var node = document.createElement(tag);
        if (className) node.className = className;
        if (text != null) node.textContent = text;
        return node;
    }

    /* 键帽视图：4 行错位排列，每颗键帽子内容可独立滚动 */
    function buildKeys(app) {
        var wrap = el('div', 'keys-scroll');
        var board = el('div', 'keyboard-container');
        var items = [];

        app.rows.forEach(function (row) {
            var rowEl = el('div', 'key-row ' + row.row);
            row.keys.forEach(function (key) {
                var item = el('div', 'key-item');
                var scroll = el('div', 'key-scroll-wrap');
                var text = el('div', 'key-text');

                key.lines.forEach(function (line, i) {
                    if (i > 0) text.appendChild(document.createElement('br'));
                    text.appendChild(document.createTextNode(line));
                });

                scroll.appendChild(text);
                item.appendChild(scroll);
                item.appendChild(el('div', 'key-label', key.label));
                rowEl.appendChild(item);

                /* 空键帽不参与搜索，避免搜到没有内容的键位 */
                if (key.lines.length) {
                    items.push({
                        node: item,
                        text: (key.label + ' ' + key.lines.join(' ')).toLowerCase()
                    });
                }
            });
            board.appendChild(rowEl);
        });

        wrap.appendChild(board);

        var container = el('div', 'keys-view');
        container.appendChild(wrap);
        container.appendChild(el('p', 'keys-hint', '左右滑动可查看完整键盘'));

        var filled = app.rows.reduce(function (sum, row) {
            return sum + row.keys.filter(function (k) { return k.lines.length > 0; }).length;
        }, 0);

        return { node: container, items: items, filled: filled };
    }

    /* 列表视图 */
    function buildList(app) {
        var panel = el('div', 'text-list-panel');
        panel.appendChild(el('h2', 'text-list-title', app.name + ' 快捷键'));
        var list = el('ul', 'sc-list');
        var items = [];

        app.items.forEach(function (pair) {
            var li = el('li', 'sc-item');
            li.appendChild(el('span', 'sc-key', pair[0]));
            li.appendChild(el('span', 'sc-desc', pair[1]));
            list.appendChild(li);
            items.push({ node: li, text: (pair[0] + ' ' + pair[1]).toLowerCase() });
        });

        panel.appendChild(list);
        return { node: panel, items: items, filled: items.length };
    }

    function buildEmpty(app) {
        var box = el('div', 'board-empty');
        box.appendChild(el('strong', null, '「' + app.name + '」还没有录入'));
        box.appendChild(document.createTextNode('位置已经留好，在 js/shortcuts-data.js 里补上键位内容就会自动出现。'));
        return { node: box, items: [], filled: 0 };
    }

    dataset.apps.forEach(function (app, index) {
        var built = app.type === 'keys' ? buildKeys(app) : buildList(app);
        if (!built.filled) built = buildEmpty(app);

        var panel = el('section', 'board');
        panel.id = 'panel-' + app.id;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'tab-' + app.id);
        panel.appendChild(built.node);

        var emptyHint = el('div', 'board-empty is-hidden');
        emptyHint.appendChild(el('strong', null, '没有匹配的快捷键'));
        emptyHint.appendChild(document.createTextNode('换个关键词试试，或者切到其他标签页。'));
        panel.appendChild(emptyHint);

        var tab = el('button', 'tab-btn');
        tab.type = 'button';
        tab.id = 'tab-' + app.id;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-controls', panel.id);
        tab.setAttribute('aria-selected', 'false');
        tab.tabIndex = -1;
        tab.appendChild(document.createTextNode(app.name));
        var count = el('span', 'count');
        count.hidden = true;
        tab.appendChild(count);

        tab.addEventListener('click', function () { activate(app.id); });

        boards.appendChild(panel);
        tabBar.appendChild(tab);

        records.push({
            id: app.id,
            name: app.name,
            tab: tab,
            panel: panel,
            items: built.items,
            emptyHint: emptyHint,
            countEl: count,
            total: built.items.length,
            hits: built.items.length
        });

        if (index === 0) activeId = app.id;
    });

    /* ---------------- 交互 ---------------- */

    function activate(id, silent) {
        if (!records.some(function (r) { return r.id === id; })) return;
        activeId = id;

        records.forEach(function (rec) {
            var on = rec.id === id;
            rec.tab.classList.toggle('active', on);
            rec.tab.setAttribute('aria-selected', on ? 'true' : 'false');
            rec.tab.tabIndex = on ? 0 : -1;
            rec.panel.classList.toggle('active', on);
            rec.panel.hidden = !on;
        });

        if (!silent) {
            try {
                history.replaceState(null, '', '#' + id);
            } catch (e) {
                /* file:// 下可能被拒绝，忽略即可 */
            }
        }
    }

    function applyQuery(raw) {
        var q = raw.trim().toLowerCase();
        var firstHit = null;
        var activeHits = 0;

        records.forEach(function (rec) {
            var hits = 0;
            rec.items.forEach(function (item) {
                var match = !q || item.text.indexOf(q) !== -1;
                item.node.classList.toggle('is-hidden', !match);
                if (match) hits++;
            });

            rec.hits = hits;
            rec.emptyHint.classList.toggle('is-hidden', !(q && hits === 0));
            /* 只在搜索时给有结果的标签页显示数量，0 条的直接变暗 */
            rec.countEl.hidden = !q || hits === 0;
            rec.countEl.textContent = hits ? hits : '';
            rec.tab.classList.toggle('no-hits', !!q && hits === 0);

            if (q && hits > 0 && !firstHit) firstHit = rec.id;
            if (rec.id === activeId) activeHits = hits;
        });

        /* 当前标签页一条都没匹配上时，自动跳到第一个有结果的标签页 */
        if (q && activeHits === 0 && firstHit) activate(firstHit, true);
    }

    /* 标签栏左右方向键切换 */
    tabBar.addEventListener('keydown', function (e) {
        var keys = { ArrowRight: 1, ArrowLeft: -1 };
        var move = keys[e.key];
        if (!move) return;
        e.preventDefault();
        var index = records.findIndex(function (r) { return r.id === activeId; });
        var next = records[(index + move + records.length) % records.length];
        activate(next.id);
        next.tab.focus();
    });

    searchBox.addEventListener('input', function () {
        applyQuery(searchBox.value);
    });

    /* ---------------- 初始化 ---------------- */

    document.title = dataset.title;
    if (titleEl) titleEl.textContent = dataset.title;
    if (noteEl) noteEl.textContent = dataset.note;

    var total = records.reduce(function (sum, r) { return sum + r.total; }, 0);
    var hasKeyView = dataset.apps.some(function (a) { return a.type === 'keys'; });
    if (tipEl) {
        tipEl.textContent = '共 ' + total + ' 条 · ' +
            (hasKeyView ? '鼠标放到键帽内部可滚轮滚动查看全部功能 · ' : '') +
            '支持关键词搜索（跨全部标签页）';
    }

    var hash = (location.hash || '').replace('#', '');
    activate(records.some(function (r) { return r.id === hash; }) ? hash : activeId, !hash);
})();
