import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import User from './models/user';
import Kendaraan from './models/book';

const app = express();
const router = express.Router(); 

//middleware
app.use(cors());
app.use(bodyParser.json());

//url of mongodb database
//localhost:27017 is the host or port of our mongdb url/ location
// /users is a specific database that we want to use in our server
mongoose.connect('mongodb://localhost:27017/MySimpleDB');

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDb database connection established succcesfully!');
});

router.route('/users').get((req, res) => {
	User.find((err, pengguna) => {
		if (err) 
			console.log(err);
		else
			res.json(pengguna);
	});
});

router.route('/buku').get((req, res) => {
	Kendaraan.find((err, buku) => {
		if (err) 
			console.log(err);
		else
			res.json(buku);
	});
});

router.route('/users/:id').get((req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (err)
			console.log(err);
		else
			res.json(user);
	});
});

router.route('/users/add').post((req, res) => {
	let user = new User(req.body);
	user.save()
		.then(user => {
			res.status(200).json({'user':'Added Succesfully'});
		})
		.catch(err =>{
			res.status(400).send('Failed to Created new record');
		});
});

router.route('/users/update/:id').post((req, res) =>{
	User.findById(req.params.id,(err, user)=>{
		if (!user)
			return next ( new Error('Could not load document'));
		else
			user.u_id = req.body.u_id;
			user.email  = req.body.email;
			user.pwd = req.body.pwd;
			user.name   = req.body.name;
			user.phone  = req.body.phone;
			user.gender = req.body.gender;
			user.status = req.body.status;
			// user.u_id    = req.body.u_id;
			// user.email  = req.body.email;
			// user.pwd = req.body.pwd;
			// user.name   = req.body.name;
			// user.phone  = req.body.phone;
			
			
			// user.gender = req.body.gender;

			user.save().then(user => {
				res.json('Update done');
			}).catch(err =>{
				res.status(400).send('Update failed');
			});
	});
});

router.route('/users/delete/:id').get((req, res) =>{
	User.findByIdAndRemove({_id:req.params.id}, (err, user) => {
		if(err)
			res.json(err);
		else
			res.json('Remove succesfully');
	});
});
//middleware for API
app.use('/', router);

app.get('/', (req, res) => res.send('hello server'));

//connecting into localhost 4000
app.listen(4000, () => console.log('express server run on port 4000'));
