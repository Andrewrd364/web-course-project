import express from 'express'
import mongoose from 'mongoose'
const app = express()
import Dish from './Dish.js'
const DB_URL = 'mongodb+srv://andrewrd0364:visagemain0364@cluster0.b5tzfiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.use(express.json())

app.post("/", async (req, res) => {
    try {
        const {name, description, picture} = req.body
        const dish = await Dish.create({name, description, picture})
        res.json(dish)
    } catch (e) {
        res.status(500).json(e)
    }
})

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(5000, () => {console.log("Server started on port 5000")})
    } catch (e) {
        console.log(e)
    }
}
 startApp()