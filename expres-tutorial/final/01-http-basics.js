const http = require('http')
const {readFileSync} = require('fs')

const HomePgae = readFileSync('./navbar-app/index.html')
const HomeStles = readFileSync('./navbar-app/styles.css')
const HomeImage = readFileSync('./navbar-app/logo.svg')
const HomeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    console.log('user hit the server')
    const url = req.url;

    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(HomePgae)
        res.end()
    } else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(HomeStles)
        res.end()
    }  else if(url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(HomeImage)
        res.end()
    } else if(url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(HomeLogic)
        res.end()
    } else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>404 not Found</h1>')
        res.end()
    }
})
server.listen(5000)