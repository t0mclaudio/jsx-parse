function parse(str) {
  console.log(str)
  let arr = [...str] // make string an array
  let arrLength = arr.length
  let head;
  let tail;

  do {
    head = arr[0]
    tail = arr[arrLength - 1]
    arr = [...arr.slice(1, arr.length -1)]
    arrLength = arr.length
    if (head === '<' && tail === '>') {
      console.log('opened new tag')
      let thisTag = ''
      let i = 0
      while (arr[i] !== '>') {
        thisTag += arr[i]
        i++ 
      } 
    } else {
      console.log('inside tag')
    }
  } while (arrLength)
  
  
  // get the opening tag
  // get the closing tag
  return {
    type: 'type',
    children: []
  }
}

parse('<h1>Hello, world<h1/>')

module.exports = parse