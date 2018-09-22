import mongoose from 'mongoose';

const Schema = mongoose.Schema;
let Kendaraan = new Schema({
	title:{
		type: String
	},
	author:{
		type : String
	}// },
	// price:{
	// 	type :String
	// },
	// publisher:{
	// 	type :String,
	// 	default: 'open'
	// }
});

export default mongoose.model('Kendaraan', Kendaraan);

// perhatikan variabel yang dibuat dengan menggunakan let
// variabel tersebut menggunakan kata "kendaraan"
// kata tersebut harus sama dengan collection yang ada pada database
// kemudian ditambahkan huruf "s" di belakang
// sehingga penamaan collection haruslah "kendaraans"