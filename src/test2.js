import mongoose from 'mongoose';
import Employee from './db-module/mongoose-Schema';
// mongoose.connect('mongodb://localhost/testCaseDB');


var o = {};
o.map = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    emit(name, 1);
};
o.reduce = function (name, values) {
    count = 0;
    for (i in values.length) {
        count += values[i];
    }
    return count;
};
o.query = { salary : 4208703 ,_id : "5b38a996fe9b0d18b4328859"};
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});