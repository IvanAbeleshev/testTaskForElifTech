const path = require('path');
const uuid = require('uuid');
const { product } = require('../models/model');


class ProductController{
    async create(req, res, nex){
        const {name, description, price, shopId} = req.body;
        const {img} = req.files;
        let filesName = uuid.v4()+".jpg";
        img.mv(path.resolve(__dirname, '..', 'static', filesName));

        const productData = await product.create({name, description, price, shopId, img: filesName});
        return res.json(productData);

    }

    async getAll(req, res){
        let {shopId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 12;
        let offset = page * limit - limit;
        let setOfProducts;
        if(!shopId){
            setOfProducts = await product.findAndCountAll({limit, offset});
        }else
        {
            setOfProducts = await product.findAndCountAll({where:{shopId}, limit, offset});
        }
        return res.json(setOfProducts);    
    }

    async getOne(req, res){
        let {id} = req.query;              
        const findedProduct = await product.findOne({where:{id}});
        return res.json(findedProduct);
    }
}

module.exports = new ProductController();