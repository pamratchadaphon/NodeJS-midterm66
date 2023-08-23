module.exports={
    que11(req,res){
        const num1 = req.body
        const sum = (num1.num)+1
        res.send("ค่าคือ "+sum)
    },
    que22(req,res){
        const num1 = req.body
        const num11 = num1.num
        
        if (((num11 % 2 == 0) || (num11 % 3 == 0) || (num11 % 5 == 0) || (num11 % 7 == 0))&& (num11!=2 || num11!=3 || num11!=5||num11!=7)) {
            res.send("เป็นจำนวนเฉพาะ")
        }else{
           res.send("ไม่เป็นจำนวนเฉพาะ")
        }
    }
}