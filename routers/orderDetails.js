const express = require('express')
const router = express.Router()
const OrderDetails = require('../models/orderDetails');
const menu = require('../models/menu');
const orderDetails = require('../models/orderDetails');

// Adding a new Item to cart
router.get('/:item_id', async(req, res) => {

    // const order_id = req.session.order_id;
    // const table_no = req.session.table_no;
    const item_id = req.params.item_id;

    const order = new OrderDetails({
        order_id : order_id,
        table_no: table_no,
        item_id: item_id,
        item_quantity : 1,
        order_status: 'cart'
    });

    try{
        console.log(order)
        const savedOrder = await order.save();
        res.send(savedOrder);
    }catch(err){
        res.send('Error '+err);
        console.log(err)
    }
});

//fetch customer cart
router.get('/', async(req,res) => {

    const order_id = '5fb1f5daeda72e266c6a68ca';//req.session.order_id;;
    try{
        const fetchedCart = await OrderDetails.find({order_status : 'cart'})
        .populate('item_id');
        res.send(fetchedCart);
    }catch(err){
        res.send('Error: '+err)
    }
})

//deleting an item from cart
router.delete('/:itemId', async(req,res)=> {
    const itemId = req.params.itemId;
    try{
        await OrderDetails.deleteOne({_id: itemId})
        res.send('Item Deleted');
    }catch(err){
        res.send('Error: '+err) 
    }
})

//Place Order
router.get('/placeOrder', async(req,res) => {
    const order_id = '5fb1f5daeda72e266c6a68ca'; // change here
    try{
        OrderDetails.updateMany({"order_status": 'cart'}, {"$set":{"order_status": ordered}});
    }catch(err){
        res.send('Error: '+err)
    }
})

//update Quantity
router.get('/updateQuantity/:orderId/:quantity', async(res, req) =>{
    const order_id = req.params.orderId;
    const quantity = req.params.quantity;
    

    try{
        console.log(order_id + " " + quantity)
    }catch(err){
        res.send('Error: '+err)
    }
})

module.exports = router



/*

router.post('/', async(req,res) => {
    
   req.session.name = req.body.name;
    req.session.mobile_no = req.body.mobile_no;
    req.session.table_no = req.body.table_no;    

    var customer = new Customer({
        name: req.body.name,
        mobile_no: req.body.mobile_no,
    });

    var order = new Order({
        customer_id: "" ,
        table_no : req.body.table_no,
        ordered_status : ''
    });

    const query = { mobile_no: customer.mobile_no };
    const update = { name: customer.name, mobile_no: customer.mobile_no };
    const options = { upsert: true };
    try{
        const foundCustomer = await Customer.updateOne(query, update, options);
        const customerId = await Customer.findOne({name:customer.name, mobile_no : customer.mobile_no}, {name: customer.name, mobile_no: customer.mobile_no})
        req.session.customer_id = customerId._id;
        order.customer_id = customerId._id;
    }catch(err){
        res.send('Error '+ err)
    }

    try{
        const insertIntoOrder = await order.save();
        req.session.order_id = insertIntoOrder._id;
        console.log(req.session)
        res.send(insertIntoOrder)
    }catch(err){
        res.send('Error '+err)
    }
    
});
*/