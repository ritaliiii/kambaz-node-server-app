import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
export async function findCoursesForUser(userId) {
 const enrollments = await model.find({ user: userId }).populate("course");
 return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
 const enrollments = await model.find({ course: courseId }).populate("user");
 return enrollments.map((enrollment) => enrollment.user);
}
export async function enrollUserInCourse(user, course) {
 return await model.create({ _id: uuidv4(), user, course });
}
export async function unenrollUserFromCourse(user, course) {
 return await model.deleteOne({ user, course });
}
export function findAllEnrollments() {
    return model.find().lean();
}