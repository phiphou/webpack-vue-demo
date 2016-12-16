// command to return the number of elements in a page
// which are of a certain tag name
exports.command = function (selector, cssProp, callback) {
  callback = callback || function () {}
  this.execute(function (selector, cssProp) {
    return window.getComputedStyle(document.querySelector(selector), null).getPropertyValue(cssProp)
  }, [selector, cssProp], function (result) {
    callback.call(this, result)
  })
  return this
}
