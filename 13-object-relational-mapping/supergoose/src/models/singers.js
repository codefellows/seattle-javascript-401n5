import mongoose, {Schema} from 'mongoose';

const schema = Schema({
  name: String,
  rank: Number,
});

const skipInit = process.env.NODE_ENV === 'test';

export default mongoose.model('Singer', schema, null, skipInit);