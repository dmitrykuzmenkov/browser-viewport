var now = function () {
  if (window.performance && window.performance.now) {
    return window.performance.now();
  }

  return Date.now();
};

var ease = function(k) {
  return 0.5 * (1 - Math.cos(Math.PI * k));
};

var frame;
module.exports = {
  isIn: function (el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  },
  scrollTo: function (el, to, duration) {
    if (duration <= 0) {
      return;
    }

    if (frame) {
      window.cancelAnimationFrame(frame);
    }

    var scroll_top = el.scrollTop;
    var start_time = now();

    var scroll_func = function() {

      if (scroll_top === to) {
        window.cancelAnimationFrame(frame);
        return;
      }

      var elapsed = (now() - start_time) / duration;
      elapsed = elapsed > 1 ? 1 : elapsed;

      var new_pos = Math.abs(scroll_top + (to - scroll_top) * ease(elapsed));
      scroll_top = new_pos > to ? to : new_pos;

      // Finally scroll to position
      el.scrollTop = scroll_top;
      window.requestAnimationFrame(scroll_func);
    };
    frame = window.requestAnimationFrame(scroll_func);
  },
  width: function () {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  },
  height: function () {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
};
