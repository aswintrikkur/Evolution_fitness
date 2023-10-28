const { timeStamp } = require('console');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    service: {
        type: String,
        enum: ['group fitness classes', 'weight training sessions', 'personal training', 'calisthenics'],
        default: 'weight training sessions'
    },
    message: {
        type: String,
    }
}, {timestamps:true}
);
const Customer = mongoose.model('Customer', customerSchema);

module.exports = { Customer }