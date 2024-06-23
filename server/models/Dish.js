import mongoose from 'mongoose'

const Dish = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    categoryId: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    weightInGrams: { type: Number, required: true },
    nutritionalValue: {
        protein: { type: Number, required: true },
        fats: { type: Number, required: true },
        carbohydrates: { type: Number, required: true }
  }
})

export default mongoose.model('Dish', Dish)