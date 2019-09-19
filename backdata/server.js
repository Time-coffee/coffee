const express=require('express')
const mongodb=require('./db/connect')
const app=express()
const Shop=require('./router/shop')
const Data=require('./router/data')
<<<<<<< HEAD
=======
const User=require('./router/user')
const Banner=require('./router/banner')
>>>>>>> 096274918c8f7939c12a1ca9cac324d0a79efdcc

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/coffee/shop',Shop)
<<<<<<< HEAD
app.use('/coffee/data',Data)


app.listen(8080,()=>{
=======
app.use('/coffee/shop',Data)
app.use('/coffee/shop',User)
app.use('/coffee/shop',Banner)

app.listen(3001,()=>{
>>>>>>> 096274918c8f7939c12a1ca9cac324d0a79efdcc
    console.log('server start')
})