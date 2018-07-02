import mongoose from 'mongoose';
import Employee from './db-module/mongoose-Schema';
// mongoose.connect('mongodb://localhost/testCaseDB');


const o = {};
o.map = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    const salary = this.salary;
    emit(name, salary);
};
o.reduce = function (keyname,valuesalary) {
    return Array.sum(valuesalary);
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});