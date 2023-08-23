const UserController = require('./controller/UserController')

module.exports=(app)=>{
    app.post('/que1',UserController.que11)
    app.post('/que2',UserController.que22)
}