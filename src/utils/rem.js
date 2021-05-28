(function() {
    var tid;

    function reSet() {
      var designWidth = 400;
      var maxWidth = 500;
      var nowWidth = document.documentElement.clientWidth;
      if (nowWidth > maxWidth) {
        nowWidth = maxWidth;
      }
      var fontSize = nowWidth * 100 / designWidth;
      document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
    }
    reSet();

    window.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(reSet, 300);
    }, false);

    window.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(reSet, 300);
        }
    }, false);
})()
