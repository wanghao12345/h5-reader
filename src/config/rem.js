(function (doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  let remCalculation = function () {
    let clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = 24 * (clientWidth / 640) + 'px'
    if (clientWidth < 375) {
      docEl.style.fontSize = 12 + 'px'
    }
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, remCalculation, false)
  doc.addEventListener('DOMContentLoaded', remCalculation, false)
})(document, window)
