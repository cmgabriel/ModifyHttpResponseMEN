const axios = require('axios');
const EmployeeModel = require('../models/Employee');
// @desc Retrieves the information from the external URL
const getExtEmployees = async () => {

    //Read the URL from the config file. 
    let employeeUrl = process.env.REST_SAMPLE_URL
    try {
        //Connect to the external URL to retrieve the information
        let response = await axios.get(employeeUrl);
        // This block is dependent on the information that you are receiving back from the external api.
        let responseData = response.data.data;
        if(responseData.length != 0) {
            responseData.forEach( async (el,index) => {
                let employee = new EmployeeModel({
                    get name() {
                        return el.employee_name;
                    },
                    get salary() {
                        // Modiying the salary by appending currency along with it. USD
                        return `USD ${el.employee_salary}`
                    },
                    get age() {
                        //Append yrs to the age
                        return `${el.employee_age} yrs`
                    },
                    get image() {
                        return `${el.profile_image}`
                    }
                });
                
                try {
                    //Save the model to database
                    let saveEl = await employee.save();
                } catch(error){
                    console.log(`Cannot save employee information to the database: ${error}`)
                }

            });
        }

    } catch(error){
        console.log(`Encountered an error while retrieving information from external source`);
    }
}

exports.getExtEmployees = getExtEmployees;
