const mongoose = require("mongoose");

const CourseCategorySchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = CourseCategory = mongoose.model(
  "courseCategory",
  CourseCategorySchema
);
