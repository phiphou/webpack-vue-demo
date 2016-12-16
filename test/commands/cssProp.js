// command to return the number of elements in a page
// which are of a certain tag name
exports.command = function (selector, cssProp, callback) {
  callback = callback || function () {}
  this.execute(function (selector, cssProp) {
    var el = document.querySelector(selector)
    var defaultView = (el.ownerDocument || document).defaultView
    var v = null
    if (defaultView && defaultView.getComputedStyle) {
      cssProp = cssProp.replace(/([A-Z])/g, '-$1').toLowerCase()
      v = defaultView.getComputedStyle(el, null).getPropertyValue(cssProp)
    } else if (el.currentStyle) { // IE
      cssProp = cssProp.replace(/-(\w)/g, function (str, letter) {
        return letter.toUpperCase()
      })
      v = el.currentStyle[cssProp]
    }
    return v
  }, [selector, cssProp], function (result) {
    callback.call(this, result)
  })
  return this
}
