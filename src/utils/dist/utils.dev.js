'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.debounce = debounce
exports.throttle = throttle

// 防抖
function debounce (fn, space) {
  let task = null
  console.log('space', space)
  return function () {
    if (task) {
      clearTimeout(task)
    }

    task = setTimeout(fn.apply(this, arguments), space)
  }
} // 节流

function throttle (fn, space) {
  let task = null
  return function () {
    if (!task) {
      task = setTimeout(function () {
        task = null
        fn.apply(this, arguments)
      }, space)
    }
  }
}
