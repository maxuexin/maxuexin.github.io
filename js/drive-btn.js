/* ==========================================================================
   下载链接按钮 —— 所有收藏页共用（音乐 / 书籍 / 电影 / 软件插件 / 网站）
   按钮紧贴页标题右侧显示，点击直达网盘。
   --------------------------------------------------------------------------
   【怎么填】网盘网址拿到后，改下面 url 一行即可全站生效；
   url 为空时按钮为虚线禁用态，不会产生死链。
   ========================================================================== */

(function () {
    'use strict';

    var DRIVE = {
        name: '学习网盘',
        label: '下载链接',
        url: ''   /* ← 网盘链接拿到后填到这里，例如 'https://pan.baidu.com/s/xxxx' */
    };

    var app = document.getElementById('app');
    if (!app) { return; }

    var titleEl = app.querySelector('.page-title');
    var hasUrl = typeof DRIVE.url === 'string' && DRIVE.url !== '';
    var btn = document.createElement(hasUrl ? 'a' : 'span');
    btn.className = 'drive-btn' + (hasUrl ? '' : ' is-disabled');
    if (hasUrl) {
        btn.href = DRIVE.url;
        btn.target = '_blank';
        btn.rel = 'noopener';
        btn.setAttribute('aria-label', '打开' + DRIVE.name);
        btn.title = DRIVE.name;
    } else {
        btn.title = '链接待补充';
    }

    /* 内联云盘下载图标（静态字符串，无注入风险） */
    btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"' +
        ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
        '<path d="M12 13v9"/>' +
        '<path d="M8.5 18.5 12 22l3.5-3.5"/>' +
        '<path d="M19.5 16.5A4.5 4.5 0 0 0 18 7.7h-1.2A7.5 7.5 0 1 0 4.5 15"/>' +
        '</svg>' +
        '<span class="drive-btn-text">' + DRIVE.label + '</span>';

    app.classList.add('has-drive-btn');
    app.appendChild(btn);

    /* ---------- 定位：桌面端紧贴标题文字右侧垂直居中；窄屏回到右上角（CSS 负责） ---------- */
    function place() {
        if (!titleEl || window.innerWidth < 601) {
            btn.style.left = '';
            btn.style.top = '';
            btn.style.right = '';
            return;
        }

        var range = document.createRange();
        range.selectNodeContents(titleEl);
        var t = range.getBoundingClientRect();
        var a = app.getBoundingClientRect();
        if (!t.width) { return; }

        btn.style.left = Math.round(t.right - a.left + 20) + 'px';
        btn.style.top = Math.round(t.top - a.top + (t.height - btn.offsetHeight) / 2) + 'px';
        btn.style.right = 'auto';
    }

    place();
    window.addEventListener('resize', place);
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(place).catch(function () {});
    }
})();
