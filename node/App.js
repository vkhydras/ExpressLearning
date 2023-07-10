var http = require('http')
var fs = require('fs')


http
    .createServer(function (req,res){
        const fileStream = fs.createReadStream('./content/big.txt','utf-8')
        fileStream.on('open',()=>{
            fileStream.pipe()
        })
        fileStream.on('error',err=>{
            console.log('Error present')
        })
    })

    .listen(5000)