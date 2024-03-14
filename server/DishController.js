import Dish from "./Dish.js";

class DishController {

    async create(req, res){
        try {
            const {name, description, picture} = req.body
            const dish = await Dish.create({name, description, picture})
            return res.json(dish)
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