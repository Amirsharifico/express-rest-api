const express = require('express')
const app= express();

app.get('/', (req, res) =>{
    res.send('This message is from insid of express-rest-api app by A5HKIAN ')
})

app.listen(3000, () => console.log('Listening to port 3000...'))
