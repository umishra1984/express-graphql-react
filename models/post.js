const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  tags: String,
  authorId: String
});

module.exports = mongoose.model("Post", postSchema);
