const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(
    uri,
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