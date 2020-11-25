const express = require('express')
const router = express.Router()
const Order = require('../models/order')

// router.get('/', async(req,res) => {
//     try{
//         const fetchedFeedbacks = await Feedback.find()
//         res.json(fetchedFeedbacks)
//     }catch(err){
//         res.send('Error '+ err)
//     }
// });

// router.post('/', async(req, res) => {
//     const feedback = new Feedback({
//         customer_id: req.body.customer_id,
//         email_id: req.body.email_id,
//         feedback: req.body.feedback,
//         feedback_status: req.body.feedback_status
//     });

//     try{
//         const savedFeedback = await feedback.save();
//         res.json(savedFeedback);
//     }catch(err){
//         res.send('Error '+err);
//     }
// });

// router.patch('/:feedbackId', async(req, res) => {
//     try{
//         const updatedPost = await Feedback.updateOne(
//             {_id : req.params.feedbackId}, 
//             {$set:{feedback_status : req.body.feedback_status} }
//             );
//         res.json(updatedPost);
//     }catch(err){
//         res.send('Error '+err);
//     }
// });

module.exports = router