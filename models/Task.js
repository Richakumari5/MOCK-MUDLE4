const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category"},
    priority: {type: String, enum: ["Low", "Medium", "High"], required: true},
    dueDate: {type: Date, required: true},
    status: {type: String, enum:["Pending", "Completed"], default: "Pending"},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "user"}
});

module.exports = mongoose.model("Task", TaskSchema);