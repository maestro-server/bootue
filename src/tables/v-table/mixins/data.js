module.exports = function () {
  return {
    id: makeId(),
    rowsToggleState: {},
    windowWidth: window.innerWidth,
    userMultiSorting: {}
  }
}

function makeId () {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}
