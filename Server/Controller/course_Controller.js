const Courses = require("../Models/courses");
module.exports.fetchCourses = async (req, res) => {
  try {
    const courses = await Courses.find();
    res.json(courses);
  } catch (e) {
    console.log("Error ", e);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.createCourse = async (req, res) => {
  try {
    let course = new Courses(req.body);
    
    await course.save();
    res.status(200).send("Course Saved Successfully");
  } catch (e) {
    console.log("Error received", e);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.getCourse = async (req, res) => {
  try {
    let { id } = req.params;
    let course = await Courses.findById(id);
    res.json(course);
  } catch (e) {
    console.log("Error ", e);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.editCourse = async (req, res) => {
  try {
    let { id } = req.params;
    await Courses.findByIdAndUpdate(id, req.body);
    res.status(200).send("Updated Successfully");
  } catch (e) {
    console.log("Error", e);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.deleteCourse = async (req, res) => {
  try {
    let { id } = req.params;
    await Courses.findByIdAndDelete(id);
    res.status(200).send("Course Deleted Successfully");
  } catch (e) {
    console.log("Error", e);
    res.status(500).send("Internal Server Error");
  }
};


