const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://edituser:BhEPHi8obT3WT9wH@cluster0.cgys0.mongodb.net/FullStack?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
    } catch(err) {
        console.log(err);
        process.exit();
    }
}



