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

	//pendeklarasian di atas tidak mempengaruhi data yang muncul
	//untuk method get
	//namun akan digunakan saat kita akan melakukan edit insert atau pun delete

});

export default mongoose.model('User', User);