function parse(str) {
  console.log(str)
  let arr = [...str] // make string an array
  let arrLength = arr.length
  let head;
  let tail;

  do {
    head = arr[0]
    tail = arr[arrLength - 1]
    if (head === '<' && tail === '>') {
      console.log('Opened new tag')
      let thisTag = ''
      let i = 1
      while (arr[i] !== '>') {
        thisTag += arr[i]
        i++ 
      }
      arr = [...arr.slice(thisTag.length + 1, arr.length - (thisTag.length + 2))] // to accommodate for 2 chars />
      console.log("The current tag >>", thisTag)
      // TODO: handle tag attributes
    } else {
      arr = [...arr.slice(1, arr.length -1)]
      arrLength = arr.length
      console.log('Inside a tag', arr)
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