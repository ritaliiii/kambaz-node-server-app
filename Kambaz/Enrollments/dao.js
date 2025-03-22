import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}
// Unenroll a user from a course
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  const initialLength = enrollments.length;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
  return { success: initialLength !== Database.enrollments.length }; // Return success status
}

// Find all enrollments for a specific user
export function findEnrollmentsByUser(userId) {
  const { enrollments } = Database;
  return enrollments.filter((enrollment) => enrollment.user === userId);
}
