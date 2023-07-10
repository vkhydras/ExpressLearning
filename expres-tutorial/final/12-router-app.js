const express = require('express');
const app = express();
const{people} = require('./data')

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))

app.get('/api/people',(req,res)=>{
    res.status(200).json({succes:true,dats:people})
})
app.post('/api/people',(req,res)=>{
    res.status(201).send('succes')
})
app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide a name')
})

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});