/* ==========================================================================
   网站收藏页面渲染器 —— html/wangzhan.html
   数据：js/wangzhan-data.js（window.SITES_DATA）
   结构：无分类标签页，所有网站卡片平铺在一个网格中，整卡可点击跳转
   ========================================================================== */

(function () {
    'use strict';

    var data = window.SITES_DATA;
    if (!data || !data.categories) { return; }

    var titleEl = document.getElementById('page-title');
    var noteEl = document.getElementById('page-note');
    var boardsEl = document.getElementById('boards');
    var searchEl = document.getElementById('search');
    var tipEl = document.getElementById('footer-tip');

    if (titleEl) { titleEl.textContent = data.title || '网站收藏'; }
    if (noteEl) { noteEl.textContent = data.note || ''; }

    function el(tag, cls, text) {
        var node = document.createElement(tag);
        if (cls) { node.className = cls; }
        if (text !== undefined && text !== null && text !== '') { node.textContent = text; }
        return node;
    }

    /* ---------- 数据整理：所有分类的网站合并平铺 ---------- */
    var sites = [];
    data.categories.forEach(function (cat) {
        (cat.sites || []).forEach(function (s) {
            if (s && s.name && s.url) { sites.push(s); }
        });
    });

    if (tipEl) {
        tipEl.textContent = '共 ' + sites.length + ' 个网站 · 支持名称与网址搜索';
    }

    /* ---------- 渲染卡片网格 ---------- */
    var panel = el('div', 'sites-panel');
    var cards = [];

    sites.forEach(function (site) {
        var host = '';
        try { host = new URL(site.url).hostname.replace(/^www\./, ''); } catch (e) { host = site.url; }

        var card = el('a', 'site-card');
        card.href = site.url;
        card.target = '_blank';
        card.rel = 'noopener';

        var avatar = el('span', 'site-avatar', site.name.charAt(0).toUpperCase());
        var body = el('span', 'site-body');
        body.appendChild(el('span', 'site-name', site.name));
        if (site.desc) { body.appendChild(el('span', 'site-desc', site.desc)); }
        body.appendChild(el('span', 'site-host', host));

        var arrow = el('span', 'site-arrow', '↗');

        card.appendChild(avatar);
        card.appendChild(body);
        card.appendChild(arrow);
        panel.appendChild(card);

        cards.push({
            node: card,
            text: (site.name + ' ' + (site.desc || '') + ' ' + host + ' ' + site.url).toLowerCase()
        });
    });

    if (sites.length === 0) {
        panel.appendChild(emptyState('还没有收录网站',
            '在 js/wangzhan-data.js 里的 sites 数组中加一条就好。'));
    }

    boardsEl.appendChild(panel);

    function emptyState(title, desc) {
        var box = el('p', 'board-empty');
        box.appendChild(el('strong', null, title));
        box.appendChild(document.createTextNode(desc));
        return box;
    }

    /* ---------- 搜索 ---------- */
    var empty = panel.querySelector('.board-empty');

    function applySearch() {
        var q = (searchEl.value || '').trim().toLowerCase();
        var hits = 0;

        cards.forEach(function (card) {
            var show = q === '' || card.text.indexOf(q) !== -1;
            card.node.classList.toggle('is-hidden', !show);
            if (show) { hits += 1; }
        });

        if (empty) {
            var strong = empty.querySelector('strong');
            var tip = empty.childNodes[1];
            if (q !== '' && hits === 0) {
                if (strong) { strong.textContent = '没有匹配「' + searchEl.value.trim() + '」的网站'; }
                if (tip) { tip.textContent = ''; }
            }
        }
    }

    searchEl.addEventListener('input', applySearch);
})();
