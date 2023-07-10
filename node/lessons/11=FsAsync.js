const {readFile,writeFile} = require('fs')
console.log('Start')
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Check your code again')
        return
    }
    console.log(result)
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log('Check your code again')
            return
        }
        const second = result
        console.log(result)
        writeFile('./content/result-Async.txt',
        `This is my results: ${first},${second}`,
        (err,result)=>{
            if(err){
                console.log("unable to write in the file")
            }
            console.log('Done with this task')
        }
        
        )
    })
})
console.log('Starting next task')