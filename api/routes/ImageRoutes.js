const express = require("express");
const router = express.Router();
const Image = require("../models/Image");

const imageUpload = async (req, res) => {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ error: "Image URL is required" });
  }

  try {
    const newImage = new Image({ imageUrl });
    await newImage.save();
    res
      .status(200)
      .json({ message: "Image URL saved successfully!", image: newImage });
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).json({ error: "Failed to save image URL" });
  }
};

router.post("/upload", imageUpload);

module.exports = router;
