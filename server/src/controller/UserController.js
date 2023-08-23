module.exports={
    que11(req,res){
        const num1 = req.body
        const sum = (num1.num)+1
        res.send("ค่าคือ "+sum)
    }
    // que22(req,res){

    // }
}