import Category from "../models/Category.js";

class categoryController {
    async create(req, res){
        try {
            const {name} = req.body
            const category = await Category.create({name})
            return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try {
            const categories = await Category.find();
            const formattedCat = categories.map(cat => ({
                id: cat._id,
                name: cat.name
            }));
            return res.json(formattedCat);
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
            const category = await Category.findById(id);
            const formattedCat = category.map(cat => ({
                id: cat._id,
                name: cat.name
            }));
            return res.json(formattedCat);
            return res.json(category);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res){
        try {
            const category = req.body
            if(!category._id){
                return res.status(400).json({message:'Id не указан'})
            }
            const updatedCategory = await Category.findByIdAndUpdate(category._id, category, {new: true})
            return res.json(updatedCategory)
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
            const category = await Category.findByIdAndDelete(id)
            return res.json(category)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new categoryController();