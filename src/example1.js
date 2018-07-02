import mongoose from 'mongoose';
import Employee from './db-module/mongoose-Schema';
mongoose.connect('mongodb://localhost/testCaseDB');

/* import mongojs from 'mongojs';
const db = mongojs('testCaseDB', ['employees', 'example1_result']); */

/* // sum of the salary of total employees 
 const mapper = function () {
     const name = this.firstName + " " +this.middleName + " " + this.lastName;
    emit(this.name, this.salary);
};

const reducer = function (name, salary) {
    return Array.sum(salary);
};
db.employees.mapReduce(
    mapper,
    reducer,
    {
        out: "example1_results"
    }
);
db.example1_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});
 */


// fetching location

/* const mapped = function () {
    emit(this.firstName,1);
}
const reduced = function (firstName,count) {
    return Array.sum(count);
}
db.employees.mapReduce(
    mapped,
    reduced,
    {
        out: "results"
    }
);
db.results.find((err, docs) => {
    if (err) throw err;
    console.log(docs)
}) 
 */

// db.aggregate([{$group : {_id : "$name", department : {$sum : 1}}}]);





/* const mapFunc = function() {
	for(i = 0; i < this.employees.length; i++){
		var employee = this.employees[i];
 
		// Emit gets 2 arguments being the key on which you want to group the 
		// data and the data itself
		emit(employee.firstName + " " + employee.lastName, 1);
	}
};

const reduceFunc = function(employee, values) {
	count = 0;
 
	for(i = 0; i < values.length; i++){
		count += values[i];
	}
	return count;
};

db.employee.mapReduce(
	mapFunc,
	reduceFunc,
	{ out: "results" }
); 

db.results.find((err, docs) => {
    if (err) throw err;
    console.log(docs)
});  */



const o = {};
o.mapper = () => {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    emit(name, 1);
};
o.reduce = (salary, count) => Array.sum(count);
// const query = { salary: 8907470 };
const mapReduceOptions = {
    mapper,
    reduce
};
Employee.mapReduce(o,
    mapReduceOptions,
    { out: "example1_results" }

);
