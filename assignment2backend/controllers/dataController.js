import data from "../models/dataModel.js";

export const addData = async (req, res) => {
  console.time("addData");
  try {
    // Clear existing data
    await data.deleteMany({});
    // Add new data
    const newData = await data.create(req.body);
    res.json({ message: "Data added successfully.", data: newData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding data.", error: error.message });
  }
  console.timeEnd("addData");
};

export const getData = async (req, res) => {
  console.time("getData");
  try {
    // Retrieve all data from the database
    const allData = await data.find();

    // Send the retrieved data in the response
    res.json({ message: "All data retrieved successfully", getData: allData });
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res
      .status(500)
      .json({ message: "Error retrieving data", error: error.message });
  }
  console.timeEnd("getData");
};

export const getSingleData = async (req, res) => {
  console.time("singleData");
  const { id } = req.query;
  try {
    // Retrieve all data from the database
    const Data = await data.findById({ _id: id });
    // Send the retrieved data in the response
    res.json({ message: "single data retrieved successfully", Data });
  } catch (error) {
    // If an error occurs, send a 500 response with the error message
    res
      .status(500)
      .json({ message: "Error retrieving data", error: error.message });
  }
  console.timeEnd("singleData");
};

export const updateData = async (req, res) => {
  console.time("updateDataTime");
  const { id } = req.query;
  try {
    const updatedData = await data.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!updatedData) {
      return res.status(404).json({ message: "Data not found." });
    }
    res.json({ message: "Data updated successfully.", data: updatedData });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating data.", error: error.message });
  }
  console.timeEnd("updateDataTime");
};
