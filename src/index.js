import bodyparser from 'body-parser';
import express from 'express';
import router from '../src/routers/router'; 

// calls the express function
const app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api', router);
router.get('/', (req, res) => {
    res.json(employees);
});

// created server at port 8000
app.listen(8000, () => {
    console.log('Sever listening at port number 8000');
});