function parse(str) {
  console.log(str)
  let arr = [...str] // make string an array
  let arrLength = arr.length
  let head;
  let tail;

  // do {
  //   head = arr[0]
  //   tail = arr[arrLength - 1]
  //   if (head === '<' && tail === '>') {
  //     console.log('Opened new tag')
  //     let thisTag = ''
  //     let i = 1
  //     while (arr[i] !== '>') {
  //       thisTag += arr[i]
  //       i++ 
  //     }
  //     arr = [...arr.slice(thisTag.length + 1, arr.length - (thisTag.length + 2))] // to accommodate for 2 chars />
  //     console.log("The current tag >>", thisTag)
  //     // TODO: handle tag attributes
      
  //   } else {
  //     arr = [...arr.slice(1, arr.length -1)]
  //     arrLength = arr.length
  //     // console.log('Inside a tag', arr)
  //     for (let i=0; i < arrLength; i++) {
  //       console.log(arr[i])
  //     }
  //   }
  // } while (arrLength)
  for (let i=0; i < str.length; i++) {
    currentChar = str.charAt(i)
    nextChar = str.charAt(i + 1)
    if (currentChar === ' ') continue
    if (currentChar === '<') console.log('open tag', currentChar)
    if (currentChar === '{') console.log('open brace', currentChar)
    if (currentChar === '/' && nextChar === '>') console.log('closing tag', currentChar+nextChar)
    if (currentChar === '}') console.log('closing brace', currentChar)
    
  }
  
  // get the opening tag
  // get the closing tag
  return {
    type: 'type',
    children: []
  }
}

parse('<h1>Hello, world<h1/>')

module.exports = parse