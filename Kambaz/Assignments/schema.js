import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // custom ID like "A101"
    title: String,
    course: { type: String, ref: "CourseModel" }, // references Course by string _id (e.g., "RS101")
    dueDate: String,
    points: Number,
    availableFrom: String,
    availableUntil: String,
    description: String
  },
  {
    collection: "assignments"
  }
);
export default assignmentSchema;