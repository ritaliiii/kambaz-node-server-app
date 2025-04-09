import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

// export function createAssignment(assignment) {
//   const newAssignment = { ...assignment, _id: uuidv4() };
//   Database.assignments = [...Database.assignments, newAssignment];
//   return newAssignment;
// }
// export function findAssignmentsForCourse(courseId) {
//   const { assignments } = Database;
//   return assignments.filter((assignment) => assignment.course === courseId);
// }
// export function findAssignmentById(assignmentId) {
//   const { assignments } = Database;
//   return assignments.find((assignment) => assignment._id === assignmentId);
// }
// export function deleteAssignment(assignmentId) {
//   const { assignments } = Database;
//   Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
// }
// export function updateAssignment(assignmentId, assignmentUpdates) {
//   const { assignments } = Database;
//   const assignment = assignments.find((assignment) => assignment._id === assignmentId);
//   Object.assign(assignment, assignmentUpdates);
//   return assignment;
// }

export async function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  return await model.create(newAssignment);
}

export async function findAssignmentsForCourse(courseId) {
  return await model.find({ course: courseId });
}

export async function findAssignmentById(assignmentId) {
  return await model.findById(assignmentId);
}

export async function deleteAssignment(assignmentId) {
  return await model.findByIdAndDelete(assignmentId);
}

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return await model.findByIdAndUpdate(assignmentId, assignmentUpdates, { new: true });
}