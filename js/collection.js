/* ==========================================================================
   收藏类页面通用渲染器 —— 音乐 / 书籍 / 电影 等共用
   数据：各页面的 *-data.js 提供 window.COLLECTION_DATA：

   window.COLLECTION_DATA = {
       title: '页面标题',
       note: '页头副标题',
       config: {
           groupNoun: '歌手',            // 侧栏标题与统计措辞
           itemNoun:  '首歌曲',          // 页脚统计措辞
           itemUnit:  '首',              // 面板数量后缀
           searchPlaceholder: '搜索歌名 / 歌手',
           dataFile: 'js/music-data.js'  // 空状态里提示的文件路径（可省略）
       },
       groups: [
           { name: '分组名（也用作网址 #锚点）', items: ['条目1', '条目2'] }
       ]
   };

   结构与交互：左侧分组索引（sticky 可滚动）+ 右侧条目面板；
   窄屏索引收进下拉；搜索时切换为跨分组聚合结果视图；#分组名 深链接。
   ========================================================================== */

(function () {
    'use strict';

    var data = window.COLLECTION_DATA;
    if (!data || (!data.groups && !data.items)) { return; }

    var cfg = data.config || {};
    var groupNoun = cfg.groupNoun || '分组';
    var groupUnit = cfg.groupUnit || '位';          /* 「共 316 位歌手」/「共 16 个类型」 */
    var itemNoun = cfg.itemNoun || '条目';          /* 统计用：「562 部电影」 */
    var itemWord = cfg.itemWord || itemNoun;        /* 空态用：「没有找到相关电影」 */
    var itemUnit = cfg.itemUnit || '条';            /* 数量后缀：「54 首」 */
    var subSep = cfg.subSeparator || '';            /* 名称里的分隔符，后半段淡色显示 */
    var fileHint = cfg.dataFile ? '在 ' + cfg.dataFile + ' 里找到「{NAME}」，往列表里加一条就好。'
                                : '在数据文件里找到「{NAME}」，往列表里加一条就好。';

    var titleEl = document.getElementById('page-title');
    var noteEl = document.getElementById('page-note');
    var listEl = document.getElementById('group-list');
    var headEl = document.getElementById('group-nav-head');
    var totalEl = document.getElementById('group-total');
    var mainEl = document.getElementById('boards');
    var searchEl = document.getElementById('search');
    var selectEl = document.getElementById('group-select');
    var tipEl = document.getElementById('footer-tip');

    if (titleEl) { titleEl.textContent = data.title || groupNoun + '收藏'; }
    if (noteEl) { noteEl.textContent = data.note || ''; }
    if (headEl) { headEl.textContent = groupNoun; }
    if (searchEl) { searchEl.placeholder = cfg.searchPlaceholder || '搜索'; }

    /* ---------- 平铺模式：数据只有 items、无分组（书籍 / 电影等直接列名字） ----------
       数据写法：window.COLLECTION_DATA = { title, note, config: {...}, items: ['名字一', '名字二'] }
       页面不显示侧栏索引和下拉，只渲染一张面板：标题 + 总数 + 编号列表；搜索即过滤。 */
    var flatMode = (!data.groups || data.groups.length === 0) &&
                   Object.prototype.toString.call(data.items) === '[object Array]';

    if (flatMode) {
        var flatItems = data.items.map(function (s) {
            return typeof s === 'string' ? s : (s && s.name) || '';
        }).filter(function (s) { return s !== ''; });

        var layoutEl = document.querySelector('.music-layout');
        if (layoutEl) { layoutEl.classList.add('is-flat'); }
        if (tipEl) {
            tipEl.textContent = '共 ' + flatItems.length + ' ' + itemNoun + ' · 支持关键词搜索';
        }

        function renderFlat() {
            var raw = searchEl.value.trim();
            var needle = raw.toLowerCase();
            var items = needle === ''
                ? flatItems
                : flatItems.filter(function (s) { return s.toLowerCase().indexOf(needle) !== -1; });

            mainEl.textContent = '';
            var panel = el('div', 'music-panel');
            var head = el('div', 'results-head');
            var tw = el('div', 'results-title-wrap');
            if (needle === '') {
                tw.appendChild(el('h2', 'results-title', cfg.flatTitle || '全部'));
                tw.appendChild(el('p', 'results-sub', flatItems.length + ' ' + itemNoun));
            } else {
                tw.appendChild(el('h2', 'results-title', '搜索「' + raw + '」'));
                tw.appendChild(el('p', 'results-sub', items.length + ' ' + itemNoun));
            }
            head.appendChild(tw);
            panel.appendChild(head);

            if (items.length === 0) {
                panel.appendChild(emptyState('没有找到相关' + itemWord,
                    '换个关键词试试，比如只输入名称里的两个字。'));
            } else {
                var list = el('ul', 'song-list');
                items.forEach(function (s, i) { list.appendChild(itemRow(s, i, needle)); });
                panel.appendChild(list);
            }
            mainEl.appendChild(panel);
        }

        searchEl.addEventListener('input', renderFlat);
        renderFlat();
        return;
    }

    /* ---------- 数据整理（兼容 items 为字符串或对象两种写法） ---------- */
    var groups = data.groups.map(function (g) {
        var items = (g.items || []).map(function (s) {
            return typeof s === 'string' ? s : (s && s.name) || '';
        }).filter(function (s) { return s !== ''; });
        return { name: g.name, items: items, lowerName: g.name.toLowerCase() };
    });

    var totalItems = groups.reduce(function (n, g) { return n + g.items.length; }, 0);
    if (totalEl) { totalEl.textContent = String(groups.length); }
    if (tipEl) {
        tipEl.textContent = '共 ' + groups.length + ' ' + groupUnit + groupNoun + ' · ' + totalItems +
            ' ' + itemNoun + ' · 支持关键词搜索';
    }

    var current = 0;
    var query = '';
    var hits = groups.map(function (g) { return g.items.length; });

    function el(tag, cls, text) {
        var node = document.createElement(tag);
        if (cls) { node.className = cls; }
        if (text !== undefined && text !== null && text !== '') { node.textContent = text; }
        return node;
    }

    /* ---------- 分组索引 ---------- */
    groups.forEach(function (group, i) {
        var li = el('li', 'artist-row');
        var btn = el('button', 'artist-btn');
        btn.type = 'button';
        btn.setAttribute('data-index', String(i));
        btn.appendChild(el('span', 'artist-btn-name', group.name));

        var num = el('span', 'artist-btn-num', String(group.items.length));
        btn.appendChild(num);

        btn.addEventListener('click', function () { select(i); });
        li.appendChild(btn);
        listEl.appendChild(li);

        group.row = li;
        group.btn = btn;
        group.numEl = num;
    });

    /* ---------- 窄屏下拉 ---------- */
    groups.forEach(function (group, i) {
        var opt = document.createElement('option');
        opt.value = String(i);
        opt.textContent = group.name + '（' + group.items.length + '）';
        selectEl.appendChild(opt);
    });
    selectEl.addEventListener('change', function () { select(Number(selectEl.value)); });

    /* ---------- 关键词高亮 ---------- */
    function highlight(text, needle) {
        var frag = document.createDocumentFragment();
        if (!needle) {
            frag.appendChild(document.createTextNode(text));
            return frag;
        }
        var low = text.toLowerCase();
        var pos = 0;
        var at;
        while ((at = low.indexOf(needle, pos)) !== -1) {
            if (at > pos) { frag.appendChild(document.createTextNode(text.slice(pos, at))); }
            var mark = document.createElement('mark');
            mark.textContent = text.slice(at, at + needle.length);
            frag.appendChild(mark);
            pos = at + needle.length;
        }
        if (pos < text.length) { frag.appendChild(document.createTextNode(text.slice(pos))); }
        return frag;
    }

    function itemRow(item, idx, needle) {
        var li = el('li', 'song-item');
        li.appendChild(el('span', 'song-no', String(idx + 1).padStart(2, '0')));
        var nameEl = el('span', 'song-name');

        /* 「中文名 / 外文名」：分隔符后的外文名淡色显示，仍参与搜索与高亮 */
        var cut = subSep ? item.indexOf(subSep) : -1;
        if (cut > 0) {
            nameEl.appendChild(highlight(item.slice(0, cut), needle));
            var subEl = el('span', 'song-sub');
            subEl.appendChild(highlight(item.slice(cut), needle));
            nameEl.appendChild(subEl);
        } else {
            nameEl.appendChild(highlight(item, needle));
        }

        li.appendChild(nameEl);
        return li;
    }

    function emptyState(title, desc) {
        var box = el('p', 'board-empty');
        box.appendChild(el('strong', null, title));
        box.appendChild(document.createTextNode(desc));
        return box;
    }

    /* ---------- 单个分组面板 ---------- */
    function renderGroup(i) {
        var group = groups[i];
        mainEl.textContent = '';

        var panel = el('div', 'music-panel');

        var head = el('div', 'artist-head');
        head.appendChild(el('span', 'artist-avatar', group.name.charAt(0).toUpperCase()));

        var meta = el('div', 'artist-meta');
        var nameRow = el('div', 'artist-name-row');
        nameRow.appendChild(el('h2', 'artist-name', group.name));
        nameRow.appendChild(el('span', 'artist-count', group.items.length + ' ' + itemUnit));
        meta.appendChild(nameRow);
        head.appendChild(meta);
        panel.appendChild(head);

        if (group.items.length > 0) {
            var list = el('ul', 'song-list');
            group.items.forEach(function (item, idx) {
                list.appendChild(itemRow(item, idx, ''));
            });
            panel.appendChild(list);
        } else {
            panel.appendChild(emptyState('还没有录入' + itemWord,
                fileHint.replace('{NAME}', group.name)));
        }

        mainEl.appendChild(panel);
    }

    /* ---------- 搜索结果（跨分组聚合） ---------- */
    function renderResults() {
        mainEl.textContent = '';

        var hitGroups = 0;
        var hitItems = 0;
        hits.forEach(function (h) {
            if (h > 0) { hitGroups += 1; hitItems += h; }
        });

        var panel = el('div', 'music-panel');

        var head = el('div', 'results-head');
        var titleWrap = el('div', 'results-title-wrap');
        titleWrap.appendChild(el('h2', 'results-title', '搜索「' + searchEl.value.trim() + '」'));
        titleWrap.appendChild(el('p', 'results-sub', hitGroups + ' ' + groupUnit + groupNoun + ' · ' + hitItems + ' ' + itemNoun));
        head.appendChild(titleWrap);
        panel.appendChild(head);

        if (hitItems === 0) {
            panel.appendChild(emptyState('没有找到相关' + itemWord,
                '换个关键词试试，比如只输入名称里的两个字。'));
            mainEl.appendChild(panel);
            return;
        }

        var LIMIT = 10;

        groups.forEach(function (group, i) {
            if (hits[i] === 0) { return; }

            var groupEl = el('div', 'result-group');

            var groupHead = el('button', 'result-artist');
            groupHead.type = 'button';
            groupHead.appendChild(el('span', 'result-artist-name', group.name));
            groupHead.appendChild(el('span', 'result-artist-num', hits[i] + ' ' + itemUnit));
            groupHead.addEventListener('click', function () { select(i); });
            groupEl.appendChild(groupHead);

            var list = el('ul', 'song-list');
            var shown = 0;
            group.items.forEach(function (item, idx) {
                if (shown >= LIMIT) { return; }
                if (item.toLowerCase().indexOf(query) === -1 && group.lowerName.indexOf(query) === -1) { return; }
                var needle = item.toLowerCase().indexOf(query) !== -1 ? query : '';
                list.appendChild(itemRow(item, idx, needle));
                shown += 1;
            });
            groupEl.appendChild(list);

            if (hits[i] > LIMIT) {
                var more = el('button', 'result-more',
                    '还有 ' + (hits[i] - LIMIT) + ' ' + itemUnit + ' · 查看该' + groupNoun + '全部');
                more.type = 'button';
                more.addEventListener('click', function () { select(i); });
                groupEl.appendChild(more);
            }

            panel.appendChild(groupEl);
        });

        mainEl.appendChild(panel);
    }

    /* ---------- 选中态 ---------- */
    function setActive(i) {
        groups.forEach(function (group, j) {
            var active = j === i;
            group.btn.classList.toggle('active', active);
            if (active) {
                group.btn.setAttribute('aria-current', 'true');
            } else {
                group.btn.removeAttribute('aria-current');
            }
        });
    }

    function clearActive() {
        groups.forEach(function (group) {
            group.btn.classList.remove('active');
            group.btn.removeAttribute('aria-current');
        });
    }

    /* ---------- 选中分组 ---------- */
    function select(i, skipHash) {
        if (i < 0 || i >= groups.length) { return; }
        current = i;
        setActive(i);
        renderGroup(i);

        if (selectEl.value !== String(i)) { selectEl.value = String(i); }

        /* 让选中项落在索引可视区中部：只滚动侧栏，不带动整页 */
        var row = groups[i].row;
        if (row) {
            var top = row.offsetTop;
            var center = top - Math.round((listEl.clientHeight - row.offsetHeight) / 2);
            listEl.scrollTop = Math.max(0, center);
        }

        if (!skipHash) {
            try {
                history.replaceState(null, '', '#' + encodeURIComponent(groups[i].name));
            } catch (e) { /* file:// 下静默失败 */ }
        }
    }

    /* ---------- 搜索 ---------- */
    function applySearch() {
        query = searchEl.value.trim().toLowerCase();

        var visible = 0;
        groups.forEach(function (group, i) {
            if (query === '') {
                hits[i] = group.items.length;
            } else if (group.lowerName.indexOf(query) !== -1) {
                hits[i] = group.items.length;          /* 分组名命中：整组都算 */
            } else {
                hits[i] = group.items.reduce(function (n, s) {
                    return n + (s.toLowerCase().indexOf(query) !== -1 ? 1 : 0);
                }, 0);
            }

            var show = query === '' || hits[i] > 0;
            group.row.classList.toggle('is-hidden', !show);
            if (show) { visible += 1; }

            group.numEl.textContent = String(query === '' ? group.items.length : hits[i]);
        });

        if (totalEl) {
            totalEl.textContent = query === ''
                ? String(groups.length)
                : visible + ' / ' + groups.length;
        }

        if (query === '') {
            setActive(current);
            renderGroup(current);
        } else {
            clearActive();
            renderResults();
        }
    }

    searchEl.addEventListener('input', applySearch);

    /* ---------- 初始：支持 #分组名 深链接 ---------- */
    var initialHash = '';
    try { initialHash = decodeURIComponent((location.hash || '').slice(1)); } catch (e) { initialHash = ''; }

    var startIndex = groups.findIndex(function (g) { return g.name === initialHash; });
    select(startIndex >= 0 ? startIndex : 0, true);
})();
