const path = require('path')

console.log(path.sep)

const fillePath = path.join('./conten','subfolder','text.txt')

console.log(fillePath)

const base  = path.basename(fillePath)

console.log(base)

const absolute = path.resolve(__dirname,'conten','subfolder','text.txt')
console.log(absolute)