import Dish from "../models/Dish.js";
import Category from "../models/Category.js";

class DishController {

    async create(req, res){
        try {
            let {imageUrl, name, categoryId, description, price, weightInGrams, nutritionalValue} = req.body
            const categoryExists = await Category.findById(categoryId);
            if (!categoryExists) {
                throw new Error('Wrong category Id');
            }
            else{
                imageUrl = 'http://localhost:5000/' + imageUrl
                const dish = await Dish.create({imageUrl, name, categoryId, description, price, weightInGrams, nutritionalValue})
                return res.json(dish)
            }
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try {
            const dishes = await Dish.find();
            return res.json(dishes);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getOne(req, res){
        try {
            const {id} = req.params
            if(!id){
                return res.status(400).json({message: 'Id не указан'})
            }
            const dish = await Dish.findById(id);
            return res.json(dish);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res){
        try {
            const dish = req.body
            if(!dish._id){
                return res.status(400).json({message:'Id не указан'})
            }
            const updatedDish = await Dish.findByIdAndUpdate(dish._id, dish, {new: true})
            return res.json(updatedDish)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res){
        try {
            const {id} = req.params
            if(!id){
                return req.status(400).json({message:'Id не указан'})
            }
            const dish = await Dish.findByIdAndDelete(id)
            return res.json(dish)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new DishController();