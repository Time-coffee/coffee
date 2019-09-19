const mongoose=require('mongoose')
mongoose.connect('mongodb://10.9.22.207:27017/backdata',{ useUnifiedTopology: true })

var db=mongoose.connection;
db.on('error',()=>{
    console.log('链接失败')
})
db.once('open',function(){
    console.log('链接成功')
});