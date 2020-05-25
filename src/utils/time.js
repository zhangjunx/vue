function time () {
  var date = new Date()
  var arr = [
    date.getFullYear() + '-',
    date.getMonth() + 1 + '-',
    date.getDate() + '  ',
    date.getHours() + ':',
    date.getMinutes() + ':',
    date.getSeconds()
  ]
  return arr.join('')
}

export default time
