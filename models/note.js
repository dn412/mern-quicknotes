const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');



const noteSchema = new Schema({
  text: {type: String, required: true},
  user: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userSchema' }],
    required: true
  }
}, {
  timestamps: true,
});


module.exports = mongoose.model(noteSchema);