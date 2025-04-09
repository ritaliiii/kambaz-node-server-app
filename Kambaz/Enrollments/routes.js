import * as enrollmentDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.post("/enrollments/enroll", async (req, res) => {
        const { userId, courseId } = req.body;
        const enrollment = await enrollmentDao.enrollUserInCourse(userId, courseId);
        res.json(enrollment);
      });
    // Unenroll a user from a course
app.post("/enrollments/unenroll", async (req, res) => {
    const { userId, courseId } = req.body;
    const result = await enrollmentDao.unenrollUserFromCourse(userId, courseId);
    res.json(result);
  });
  
  // Get all enrollments for a user
  app.get("/enrollments/user/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentDao.findEnrollmentsByUser(userId);
    res.json(enrollments);
  });

  app.get("/api/test/courses/:userId", async (req, res) => {
    try {
      const userId = req.params.userId;
      const courses = await findCoursesForUser(userId);
      res.json(courses);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

}
