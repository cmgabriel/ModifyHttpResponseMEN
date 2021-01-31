const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    salary: {
        type: String
    },
    age: {
        type: String
    },
    image: {
        type: String
    }
});

EmployeeSchema.pre('save', function(next) {
    let self = this;
    EmployeeModel.find({
        name: self.name
    }, function(err,docs) {
        if(!docs.length) {
            next()
        } else {
            console.log('Employee already exists!!');
        }
    })
})

const EmployeeModel = mongoose.model('Employee',EmployeeSchema);
module.exports = EmployeeModel;