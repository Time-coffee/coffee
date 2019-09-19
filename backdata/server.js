const express=require('express')
const mongodb=require('./db/connect')
const app=express()
const Shop=require('./router/shop')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/coffee/shop',Shop)


app.listen(3000,()=>{
    console.log('server start')
})