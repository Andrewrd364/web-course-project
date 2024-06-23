import mongoose from 'mongoose'

const TableReservation = new mongoose.Schema({
    email: { type: String, required: true },
    name : { type: String, required: true },
    surname : { type: String, required: true },
    phoneNumber : { type: String, required: true },
    numberOfGuests : { type: Number, required: true },
    startTime: { type: Date, required: true }
})

export default mongoose.model('TableReservation', TableReservation)