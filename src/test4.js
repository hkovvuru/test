import mongoose from 'mongoose';
import Employee from './db-module/mongoose-Schema';
// mongoose.connect('mongodb://localhost/testCaseDB');

var o = {};
o.map = function () {
    var businessunit = this.businessUnit;
   // var bunit = businessunit.split(',');
    for (i=0; i < businessunit; i++) {
        emit(businessunit[i], 1);
    }
};

o.reduce = function (key, values) {
    count = 0;
    for (index=0 ; index < values; index++) {
        count += values[index];
    }
    return count;
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});