const mongoose= require("mongoose");


const sendus= new mongoose.Schema({
    name: { type: String, required: true, maxLength: 255 },
    email: { type: String, required: true, match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ },
    phone: { type: String, required: true, match: /^\d{10}$/ },
    message: { type: String, required: true, maxLength: 1000 }
})
const details = mongoose.model("Shantidetails", sendus)
module.exports =details