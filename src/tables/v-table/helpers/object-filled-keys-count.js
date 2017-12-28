module.exports = function (obj) {
  let count = 0;
  for (let prop in obj) {
    let isDateRange = typeof obj[prop] === 'object';
    if (isDateRange || (obj[prop] && (!isNaN(obj[prop]) || obj[prop].trim()))) count++;
  }
  return count;
}
