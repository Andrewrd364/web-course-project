import mongoose from 'mongoose'

const Order = new mongoose.Schema({
    email: { type: String, required: true },
    name : { type: String, required: true },
    surname : { type: String, required: true },
    address : { type: String, required: true },
    phoneNumber : { type: String, required: true },
    dishes: [{
        dish: { type: mongoose.Schema.Types.ObjectId, ref: 'Dish', required: true },
        quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', Order)