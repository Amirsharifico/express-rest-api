const express = require('express')
const app= express();

app.get('/', (req, res) =>{
    res.send('helooooooooo')
})

app.listen(3000, () => console.log('Listening tom port 3000...'))

// tes