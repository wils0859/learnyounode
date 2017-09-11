// console.log(process.argv)


// Baby Steps
// let sum = 0
// for (let i = 2; i < process.argv.length; i++) {
//   sum += Number(process.argv[i])
// }
// console.log(sum)


// My First I/O
// var fs = require('fs')
//
// countNewLines(fs.readFileSync(process.argv[2]))
//
// function countNewLines (text) {
//   var lineCount = text.toString().split('\n').length - 1
//   console.log(lineCount)
// }


// My First Async I/O
// var fs = require('fs')
//
// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data.split('\n').length - 1)
//  })


// Filtered LS
// const fs = require('fs')
// let path = process.argv[2]
// let ext = process.argv[3]
// let arr = []
// fs.readdir(path, (err, list) => {
//   if (err) throw err
//
//   for (let i = 0; i < list.length; i++) {
//     let index = list[i]
//     if (index.includes('.' + ext)) {
//       arr.push(index)
//     }
//   }
//   arr = arr.toString().replace(/,/g, '\n')
//   console.log(arr)
// })
