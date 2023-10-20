// Import the Student model
const Report = require("../models/reportSchema");
// Create a function to add student marks
exports.addMarks = async (req, res) => {
  try {
    const newReport = new Report(req.body);
    // console.log(newReport);
    await newReport.save();
    res.json(newReport);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getReport = async (req, res) => {
  try {
    const { id } = req.query;
    var query = { id: id };
    const report = await Report.find(query).exec();
    res.json(report);
    //console.log(grade);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.updateReport = async (req, res) => {
  try {
    console.log("report");
    const { id } = req.params;
    var query = { id: id };
    console.log(id);
    const updatedData = req.body;
    console.log(updatedData);

    const report = await Report.findOneAndUpdate(query, updatedData);
    res.json(report);
    console.log(report);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.deleteReport = async (req, res) => {
  try {
    console.log("report");
    const { _id } = req.params;
    var query = { _id: _id };
    console.log(_id);

    const report = await Report.deleteOne(query);
    res.json(report);
  } catch (error) {
    console.log(error, "Internal server error");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
