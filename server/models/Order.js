import mongoose from 'mongoose'

const Order = new mongoose.Schema({
    email: { type: String, required: true },
    dishes: [{
        dish: { type: Schema.Types.ObjectId, ref: 'Dish', required: true },
        quantity: { type: Number, required: true }
    }],
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Order', Order)