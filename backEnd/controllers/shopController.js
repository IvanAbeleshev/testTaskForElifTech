const {shop} = require('../models/model');

class ShopController{
    async create(req, res) {
        const {name} = req.body;
        const type = await shop.create({name});
        return res.json(type);
    }
    
    async getAll(req, res) {
        const types = await shop.findAll();
        return res.json(types);
    }
}

module.exports = new ShopController();