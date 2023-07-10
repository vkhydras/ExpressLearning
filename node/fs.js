const {readFile,writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/second.txt','utf-8')
        await writeFile('./content/result-2.txt',`This is awesome:${first},${second}`,{flag:'a'})
        console.log(first,second)
    } catch{
        console.log('Error was encountered')
    }
}

start()

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,result)=>{
//             if(err){
//                 reject(err)
//             }
//             resolve(result)
//         })
//     })
// }

// getText('./content/first.txt')
// .then(result=> console.log(result))
// .catch(err => console.log('error'))