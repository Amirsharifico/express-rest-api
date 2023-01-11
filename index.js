const express = require('express')
const app= express();
const cors = require("cors")
app.use(cors())

app.get('/', (req, res) =>{
    // saber =>  
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9080')
    res.send([{name: 'amir', age:42}, {name: 'amir2', age:422}])
})


// app.options('/', (req, res)=>{

// res.end()
// })




app.listen(3000, () => console.log('Listening to port 3000...'))
