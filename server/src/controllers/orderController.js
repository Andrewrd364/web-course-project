import Order from "../models/Order.js";
import Dish from "../models/Dish.js";
import { sendEmail } from '../emailService.js'

class orderController {
    async create(req, res){
        try {
            const { surname, name, email, phoneNumber, address, dishes } = req.body

            if (!surname || !name || !email || !address || !phoneNumber || !dishes || !Array.isArray(dishes)) {
                return res.status(400).json({ message: 'Missing required fields or incorrect format' });
            }
    
            // Проверка структуры каждого элемента в dishes
            for (let dish of dishes) {
                if (!dish.dish || !dish.quantity) {
                    return res.status(400).json({ message: 'Each dish must have a dish ID and quantity' });
                }

                const dishExists = await Dish.findById(dish.dish);
                if (!dishExists) {
                    return res.status(400).json({ message: `Wrong dish Id. ${dish.dish} doesn't exist.` });
                }
            }

            const order = await Order.create({surname, name, email, phoneNumber, address, dishes})
            
            const currentDate = new Date().toLocaleDateString('ru-RU');
            
            let sum = 0;
            const dishDetails = await Promise.all(dishes.map(async (d) => {
                const dish = await Dish.findById(d.dish).select('name price');
                const totalPrice = dish.price * d.quantity;
                sum += totalPrice;
                return `${dish.name}, Цена: ${dish.price} руб, Количество: ${d.quantity}`;
              }));

            const subject = `Заказ от ${currentDate}`;
            const text = `Уважаемый(ая) ${name} ${surname},\n\nСпасибо за ваш заказ! Вот детали вашего заказа:\nАдрес: ${address}\nНомер телефона: ${phoneNumber}\nБлюда:\n${dishDetails.join('\n')}\nСумма: ${sum}\n\nС уважением,\nSig Yog`;
            await sendEmail(email, subject, text)

            return res.json(order)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try {
            const orders = await Order.find();
            return res.json(orders);
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
            const order = await Order.findById(id);
            return res.json(order);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res){
        try {
            const order = req.body
            if(!order._id){
                return res.status(400).json({message:'Id не указан'})
            }
            const updatedOrder = await Order.findByIdAndUpdate(order._id, order, {new: true})
            return res.json(updatedOrder)
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
            const order = await Order.findByIdAndDelete(id)
            return res.json(order)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new orderController();