var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  sender: {type: Number, required: true, index: { unique: true }}

})

moduel.exports = mongoose.model('user', UserSchema)
