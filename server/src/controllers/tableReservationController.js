import TableReservation from "../models/TableReservation.js";
import { sendEmail } from '../emailService.js'
import moment from 'moment'

class tableReservationController {
    async create(req, res){
        try {
            let { surname, name, email, phoneNumber, numberOfGuests, startTime } = req.body

            if (!surname || !name || !email || !numberOfGuests || !phoneNumber || !startTime) {
                return res.status(400).json({ message: 'Missing required fields or incorrect format' });
            }

            startTime = moment(startTime, 'DD.MM.YYYY HH:mm').toDate();
            const order = await TableReservation.create({surname, name, email, phoneNumber, numberOfGuests, startTime})
            
            const currentDate = new Date().toLocaleDateString('ru-RU');

            const subject = `Бронирование от ${currentDate}`;
            const text = `Уважаемый(ая) ${name} ${surname},\n\nСпасибо за ваше бронирование! Вот детали вашей брони:\nДата и время брони: ${startTime}\nКоличество гостей: ${numberOfGuests}\nНомер телефона: ${phoneNumber}\n\nС уважением,\nSig Yog`;
            await sendEmail(email, subject, text)

            return res.json(order)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async getAll(req, res){
        try {
            const tableReservations = await TableReservation.find();
            return res.json(tableReservations);
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
            const tableReservation = await TableReservation.findById(id);
            return res.json(tableReservation);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async update(req, res){
        try {
            const tableReservation = req.body
            if(!tableReservation._id){
                return res.status(400).json({message:'Id не указан'})
            }
            const updatedTableReservation = await TableReservation.findByIdAndUpdate(tableReservation._id, tableReservation, {new: true})
            return res.json(updatedTableReservation)
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
            const tableReservation = await TableReservation.findByIdAndDelete(id)
            return res.json(tableReservation)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

export default new tableReservationController();