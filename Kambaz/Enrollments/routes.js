import * as enrollmentDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/enrollments/enroll", (req, res) => {
        const { userId, courseId } = req.body;
        const enrollment = enrollmentDao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
      });
    // Unenroll a user from a course
app.post("/enrollments/unenroll", (req, res) => {
    const { userId, courseId } = req.body;
    const result = enrollmentDao.unenrollUserFromCourse(userId, courseId);
    res.json(result);
  });
  
  // Get all enrollments for a user
  app.get("/enrollments/user/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentDao.findEnrollmentsByUser(userId);
    res.json(enrollments);
  });
}
