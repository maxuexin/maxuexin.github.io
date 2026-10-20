// 简单鼠标光晕跟随效果
document.addEventListener('mousemove', (e) => {
  document.body.style.background = `
    radial-gradient(circle at ${e.clientX}px ${e.clientY}px, #141428 0%, transparent 45%),
    #08080b
  `;
});
