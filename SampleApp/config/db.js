const mongoose = require('mongoose');

const dbConnect = async () => {
    //Always a good practice to wrap async/await calls in a try catch block to handle the errors gracefully.
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useCreateIndex:true,
            useFindAndModify: true,
            useUnifiedTopology: true
        });
        console.log(`Mongo DB Connected: ${connection.connection.host}`)
    } catch (error) {
        
        console.log(`Cannot connect to the databasse: ${error}`)
    }
    
}

module.exports = dbConnect;