import express from 'express'
import mongoose from 'mongoose'
import { setupSwagger, openSwaggerPage } from './swaggerConfig.js'
import router from "./router.js"

const DB_URL = 'mongodb+srv://andrewrd0364:visagemain0364@cluster0.b5tzfiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
export const PORT = 5000

if (process.env.ENABLE_SWAGGER === 'true') {
    setupSwagger(app);
    openSwaggerPage();
}

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()
