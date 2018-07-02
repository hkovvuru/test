import mongoose from "mongoose";
import Employee from './db-module/mongoose-Schema';
// mongoose.connect('mongodb://localhost/testCaseDB');

/* const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example3_results']); */
const o = {};
o.mapper = function () {
    emit(this.experience, 1);
}
o.reducer = function (experience, values) {
    const countQuery = Employee.where({ 'experience': 2 }).count();
    return countQuery;
}

Employee.mapReduce(o, (err, results) => {
    if (err) throw err;
    console.log(results);
});




    /* mapper,
    reducer,
    { out: "example1_result" },
  // db.query = { experience: 2 },
)
db.example3_results.find((err, data) => {
    if (err) throw err;
    console.log(data);
}); */