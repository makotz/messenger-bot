var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

  sender: {type: Integer, required: true, index: { unique: true }}

})

moduel.exports = mongoose.model('user', UserSchema)
