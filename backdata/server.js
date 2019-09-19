const express=require('express')
const mongodb=require('./db/connect')
const app=express()
const Shop=require('./router/shop')
const Data=require('./router/data')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/coffee/shop',Shop)
app.use('/coffee/data',Data)


app.listen(8080,()=>{
    console.log('server start')
})