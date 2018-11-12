const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


// Model for CRUD application
const crudSchema = new Schema({

  postName: {
    type: String,
    trim: true,
    required: 'Please enter a name...'
  },

  description: {
    type: String,
    trim: true
  },

  keywords: {
    type: String,
    trim: true
  },

  isPublished: {
    type: Boolean
  },
  
  created: {
    type: Date,
    default: Date.now
  }

});



module.exports = mongoose.model('CRUD', crudSchema);
