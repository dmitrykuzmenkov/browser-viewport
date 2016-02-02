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

  var difference = to - el.scrollTop;
  var per_tick = difference / duration * tick_interval;

  setTimeout(function() {
    window.requestAnimationFrame(function() {
        el.scrollTop = el.scrollTop + per_tick;
        if (el.scrollTop === to) {
          return;
        }
        scroll_to(el, to, duration - tick_interval);
    });
  }, tick_interval);
};

module.exports = {
  isIn: element_in_viewport,
  scrollTo: scroll_to
};

