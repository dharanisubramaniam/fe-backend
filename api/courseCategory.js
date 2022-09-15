const express = require("express");
const router = express.Router();
const CourseCategory = require("../schema/CourseCategory");

router.post("/", async (req, res) => {
  try {
    const newCourseCategory = new CourseCategory({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    });
    const category = await newCourseCategory.save();
    res.json(category);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
router.get("/", async (req, res) => {
  try {
    const category = await CourseCategory.find({});
    res.json(category);
    // res.send("category success");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
