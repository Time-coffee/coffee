var mongoose=require ('mongoose')
mongoose.connect('mongodb://10.9.22.207:27017/backdata',{ useNewUrlParser: true })

var db = mongoose.connection;
db.on('error',()=>{console.log('数据库连接失败')});
db.once('open', function() {
    console.log('数据库连接成功')
});