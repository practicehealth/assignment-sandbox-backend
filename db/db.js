import categories from "./data/categories.js";
import visits from "./data/timeline.js";
import resouces from "./data/resources.js";
class DB {
  constructor() {
    this.categories = categories;
    this.visits = visits;
    this.resources = resouces;
  }
  getCategoryForUser(email, category) {
    return this.categories[email]?.[category];
  }
  getVisitsForUser(email) {
    return this.visits[email];
  }
  getResourcesForUser(email) {
    return this.resources;
  }
  completeTask(email, { taskId, visitId, note = "" }) {
    if (!taskId || !visitId || !email)
      throw new Error("Invalid taskId or visitId");
    // TODO: Implement this method

    const foundTask = this.visits[email]
      ?.find((v) => v._id === visitId)
      ?.validatedTasksForUser.find((t) => t.id === taskId);
    if (!foundTask) throw new Error("Task not found");

    this.visits[email] = this.visits[email]?.map((v) => {
      if (v._id === visitId) {
        v.validatedTasksForUser = v.validatedTasksForUser.map((t) => {
          if (t.id === taskId) {
            t.status = "completed";
            t.note = note;
          }
          return t;
        });
      }
      return v;
    });
  }
}

export default new DB();
