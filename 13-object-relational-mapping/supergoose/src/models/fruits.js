import mongoose from 'mongoose';

const fruitSchema = mongoose.Schema({
  color: String,
  name: {type:String, required:true},  
});

export default mongoose.model('fruits', fruitSchema);