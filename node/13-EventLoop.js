const {readFile} = require('fs')

console.log ('Started First task')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log("Could not read the file")
        return
    }
    console.log(result)
    console.log('Completed first task')
})
console.log("Starting next task")

//////////////////////////////////////////////////

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')

//////////////////////////////////////////////////////////

setInterval(()=>{
    console.log('Hellow world')
},1000)
console.log('I will run first')

/////////////////////////////////////////////////////////

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event')
    res.end('hello world')
})

server.listen(5000,()=>{
    console.log('Sever listening on port 5000')
})