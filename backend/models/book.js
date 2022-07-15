import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let Kendaraan = new Schema({
	title:{
		type: String
	},
	author:{
		type : String
	}
});

export default mongoose.model('Kendaraan', Kendaraan);
