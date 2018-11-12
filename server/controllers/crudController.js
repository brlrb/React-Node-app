const mongoose = require('mongoose');
const CRUD = mongoose.model('CRUD');



// returns all the available data
exports.loadEverything = async (req, res) => {
  // Query the database for a list of all services
  const loadEverything = await CRUD.find();
  console.log('** load everything **');
  
  res.json(loadEverything);
  console.log('** loaded **');

};


// Create: add new data into the database
exports.create = async (req, res) => {
  console.log('*** CREATE START ***');

  const create_post = new CRUD({
    postName: req.body.postName,
    description: req.body.description,
    keywords: req.body.keywords,
    isPublished: req.body.isPublished
  });

  try {
    const create = await create_post.save();
  } catch (error) {
    console.log("create save error: ", error);
  }
  
  console.log('*** CREATE END ***');

  res.redirect('/');
};




