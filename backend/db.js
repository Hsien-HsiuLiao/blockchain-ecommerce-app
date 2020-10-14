const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://mern123:fCCbc2020@cluster0.pdove.gcp.mongodb.net/blochchain-ecommerce?retryWrites=true&w=majority',
    //'your connection string',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};