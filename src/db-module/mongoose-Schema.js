import mongoose from 'mongoose';
// create Schema instance
const Schema = mongoose.Schema;

// connecting to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/testCaseDB', (err) => {
    if (err) throw err;
    console.log('Database connected successfully');
});
// create Schema and model
const employeeSchema = mongoose.Schema({
    employeeId: {
        type: Number,
    },
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    "businessUnit": {
        "businessUnitId": String,
        "businessUnitName": String,
    },
    "salary": Number,
    "experience": Number,
    "yearEndRating": Number,
    "hikePercentage": Number


});

// Creating Student reference variable for model
const Employee = mongoose.model('employees', employeeSchema);

// Exporting the Student Model
// export default Student;

export default Employee;
