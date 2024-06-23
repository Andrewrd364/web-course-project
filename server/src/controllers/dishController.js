import Dish from "../models/Dish.js";
import Category from "../models/Category.js";

class DishController {

    async create(req, res){
        try {
            let {imageUrl, name, categoryId, description, price, weightInGrams, nutritionalValue} = req.body
            const categoryExists = await Category.findById(categoryId);
            if (!categoryExists) {
                return res.status(400).json({ message: 'Wrong category Id' });
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
            const formattedDishes = dishes.map(dish => ({
                id: dish._id,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                weightInGrams: dish.weightInGrams,
                imageUrl: dish.imageUrl,
                nutritionalValue: dish.nutritionalValue,
                categoryId: dish.categoryId
            }));
            return res.json(formattedDishes);
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
            const formattedDish = dish.map(dish => ({
                id: dish._id,
                name: dish.name,
                description: dish.description,
                price: dish.price,
                weightInGrams: dish.weightInGrams,
                imageUrl: dish.imageUrl,
                nutritionalValue: dish.nutritionalValue,
                categoryId: dish.categoryId
            }));
            return res.json(formattedDish);
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
            dish.imageUrl = 'http://localhost:5000/' + dish.imageUrl
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