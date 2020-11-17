const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: {
        type: String,
        required: true 
      },
      author: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      location: {
          type: String,
          require: true
      },
      date: {
        type: Date,
        default: Date.now
      },
  }
);