const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const articleSchema = new Schema(
  {
    title: {
      type: String,
    },
    summary: {
      type: String,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: Object,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Article", articleSchema);


