import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"

const DB_URL = 'mongodb+srv://andrewrd0364:visagemain0364@cluster0.b5tzfiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(5000, () => {console.log("Server started on port 5000")})
    } catch (e) {
        console.log(e)
    }
}
 startApp()