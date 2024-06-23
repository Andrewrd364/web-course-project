import mongoose from 'mongoose'

const Dish = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    picture: {type: String}
})

export default mongoose.model('Dish', Dish)