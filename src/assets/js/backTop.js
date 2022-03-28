var query = (e) => document.querySelectorAll(e);

var dom = query('.backTop')[0];
var timer = null;

/**
 * 处理滑到顶部的代码
 */

// 向上滚动图标，处理消失和出现逻辑
window.onscroll = function () {
  if (document.documentElement.scrollTop + document.body.scrollTop > 30) {
    dom.style.display = 'block';
  } else {
    dom.style.display = 'none';
  }
};

// 每次都向上滚动50px，达到动画的效果
dom.onclick = function () {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      scrollTo(0, oTop - 50);
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  });
};
