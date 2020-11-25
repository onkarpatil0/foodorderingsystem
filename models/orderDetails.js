const mongoose = require('mongoose')
const Order = require('../models/order');
const Menu = require('../models/menu');

const OrderDetailsSchema = new mongoose.Schema({
    order_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref : 'Order'
    },
    table_no:{
        type: Number,
        required: true
    },
    item_id:{
        type: String,
        required: true,
        ref : 'Menu'
    },
    item_quantity:{
        type: Number,
        required: true,
        default: 1
    },
    order_status:{
        type: String,
        required: true,
        default: 'ordered'
    }
})

module.exports = mongoose.model('OrderDetails', OrderDetailsSchema)