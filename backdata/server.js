const express=require('express')
const mongodb=require('./db/connect')
const app=express()
const Shop=require('./router/shop')
const Data=require('./router/data')
const User=require('./router/user')
const Banner=require('./router/banner')


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/coffee/shop',Shop)
app.use('/coffee/data',Data)
app.use('/coffee/user',User)
app.use('/coffee/banner',Banner)

app.listen(3001,()=>{
    console.log('server start')
})