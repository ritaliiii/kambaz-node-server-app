import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
   // Create a new assignment
   app.post("/api/assignments", async (req, res) => {
    const newAssignment = await assignmentsDao.createAssignment(req.body);
    res.json(newAssignment);
  });

  // Get all assignments for a course
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { courseId } = req.params;
    const assignments = await assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });
  app.get("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await assignmentsDao.findAssignmentById(assignmentId);
    res.json(assignment);
  });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  });
  app.delete("/api/assignments/:assignmentId", async (req, res) => {
   const { assignmentId } = req.params;
   const status = await assignmentsDao.deleteAssignment(assignmentId);
   res.send(status);
 });
}