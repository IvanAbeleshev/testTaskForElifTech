const {order, productOrder} = require('../models/model');

class OrderController{
    async create(req, res) {
        console.log(req.body);
        try{
            const {name, address, phone, email, basket} = req.body;
            const itemOrder = await order.create({name, address, phone, email});
            basket.forEach(element => {
                productOrder.create({productId: element.id, orderId: itemOrder.id, price: element.price, count: element.count});
            });
        }catch(e){
            return res.json({status: false, message: e.message});
        }
        return res.json({status: true, message: "all is ok!"});
    }
}

module.exports = new OrderController();