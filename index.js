var element_in_viewport = function (el) {
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
};

var tick_interval = 16;
var scroll_to = function (el, to, duration) {
  if (duration <= 0) {
    return;
  }

  var per_tick = (to - el.scrollTop) / duration * tick_interval;

  setTimeout(function() {
    window.requestAnimationFrame(function() {
        if (el.scrollTop === to) {
          return;
        }
        var new_pos = Math.abs(el.scrollTop + per_tick);
        el.scrollTop = new_pos > to ? to : new_pos;
        scroll_to(el, to, duration - tick_interval);
    });
  }, tick_interval);
};

module.exports = {
  isIn: element_in_viewport,
  scrollTo: scroll_to,
  width: function () {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  },
  height: function () {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }
};
