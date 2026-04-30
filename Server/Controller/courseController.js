import Course from "../Model/CourseModel.js";
import cloudinary from "../Config/clodinary.js";

export const addCourse = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Video file is required",
      });
    }

    const course = await Course.create({
      title: req.body.title,
      des: req.body.des,
      video: req.file.path,
      public_id: req.file.filename,
    });
    res.status(201).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
     console.log(course)
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      data: course,
    });

  } catch (error) {
    
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCourse = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if (req.file) {
      await cloudinary.uploader.destroy(course.public_id, {
        resource_type: "video",
      });
      course.video = req.file.path;
      course.public_id = req.file.filename;
    }
    course.title = req.body.title || course.title;
    course.des = req.body.des || course.des;
    await course.save();

    res.status(200).json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in updating data",
      error: error.message,
    });
  }
};

export const deletecourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    await cloudinary.uploader.destroy(course.public_id, {
      resource_type: "video",
    });
    await Course.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Course Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
