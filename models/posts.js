const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
<<<<<<< HEAD
      type: String,
      required: false
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
=======
        type: String,
        required: false
      },
      content: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
>>>>>>> a0f52264a38d51640bb516f2cbae0d62cf417a5c
  }
);

module.exports = mongoose.model('Post', PostSchema);