
export default function helperToggleClass(els, classes, method = 'toggle') {
  if (typeof classes === 'string') {
    classes = classes.trim().replace(/\s+/, ' ').split(' ')
  }
  return classes.forEach(c => els.classList[method](c))
}
