/* ==========================================================================
   学习文件页面渲染器 —— html/xuexi.html
   数据：js/xuexi-data.js（window.DRIVE_DATA）
   只有一个网盘入口：有链接时整卡可点跳转；没填链接时显示「待补充」
   ========================================================================== */

(function () {
    'use strict';

    var data = window.DRIVE_DATA;
    if (!data || !data.drive) { return; }

    var titleEl = document.getElementById('page-title');
    var noteEl = document.getElementById('page-note');
    var boxEl = document.getElementById('drive-slot');

    if (titleEl) { titleEl.textContent = data.title || '学习文件'; }
    if (noteEl) { noteEl.textContent = data.note || ''; }

    function el(tag, cls, text) {
        var node = document.createElement(tag);
        if (cls) { node.className = cls; }
        if (text !== undefined && text !== null && text !== '') { node.textContent = text; }
        return node;
    }

    var drive = data.drive;
    var hasUrl = typeof drive.url === 'string' && drive.url.trim() !== '';
    var url = hasUrl ? drive.url.trim() : '';

    var host = '';
    if (hasUrl) {
        try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) { host = url; }
    }

    var card = hasUrl ? el('a', 'drive-card') : el('div', 'drive-card is-disabled');
    if (hasUrl) {
        card.href = url;
        card.target = '_blank';
        card.rel = 'noopener';
    }

    /* 图标：文件夹 */
    var icon = el('span', 'drive-icon');
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>';
    card.appendChild(icon);

    var body = el('span', 'drive-body');
    body.appendChild(el('span', 'drive-name', drive.name || '学习文件网盘'));
    if (drive.desc) { body.appendChild(el('span', 'drive-desc', drive.desc)); }

    var meta = el('span', 'drive-meta');
    if (hasUrl) {
        meta.appendChild(el('span', 'drive-host', host));
        meta.appendChild(el('span', 'drive-open', '打开网盘 ↗'));
    } else {
        meta.appendChild(el('span', 'drive-pending', '链接待补充 · 填好后这个卡片会自动变成可点击'));
    }
    body.appendChild(meta);

    card.appendChild(body);
    boxEl.appendChild(card);

    /* ---------- 提取码：独立一行，带复制按钮 ---------- */
    var code = (drive.code || '').trim();
    if (hasUrl && code) {
        var row = el('div', 'drive-code');

        row.appendChild(el('span', 'drive-code-label', '提取码'));

        var codeEl = el('span', 'drive-code-value', code);
        row.appendChild(codeEl);

        var btn = el('button', 'drive-copy', '复制');
        btn.type = 'button';
        btn.addEventListener('click', function () { copyText(code, btn, codeEl); });
        row.appendChild(btn);

        boxEl.appendChild(row);
    }

    /* ---------- 复制（优先同步方案，file:// 与 http 都能用） ---------- */
    function copyText(text, btn, codeEl) {
        var restore = function () {
            setTimeout(function () {
                btn.textContent = '复制';
                codeEl.classList.remove('is-copied');
            }, 1600);
        };

        var done = function () {
            btn.textContent = '已复制';
            codeEl.classList.add('is-copied');
            restore();
        };

        /* 1) 同步方案：临时 textarea + execCommand，最稳 */
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.top = '-100px';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        ta.setSelectionRange(0, text.length);
        var ok = false;
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        document.body.removeChild(ta);

        if (ok) { done(); return; }

        /* 2) 异步 Clipboard API 兜底 */
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done, function () {
                selectCode(codeEl, btn, restore);
            });
            return;
        }

        /* 3) 都不行：选中提取码，让用户自己按 Ctrl+C */
        selectCode(codeEl, btn, restore);
    }

    /* 复制不可用时，退化为「选中提取码」，用户按 Ctrl+C 即可 */
    function selectCode(codeEl, btn, restore) {
        var range = document.createRange();
        range.selectNodeContents(codeEl);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        btn.textContent = '已选中 · Ctrl+C';
        restore();
    }
})();
