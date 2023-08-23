let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./route')(app)

let port = 8081

app.listen(port,function(req,res){
    console.log("server running on "+port);
})