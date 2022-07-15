import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let User = new Schema({
	u_id:{
		type : String
	},
	email:{
		type: String
	},
	pwd:{
		type: String
	},
	name:{
		type: String
	},
	phone:{
		type : String
	},
	gender:{
		type: String,
	},
	status:{
		type : String,
		default : 'active'
	}
});

export default mongoose.model('User', User);
