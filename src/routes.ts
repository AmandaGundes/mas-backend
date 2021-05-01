import { Router, Request, Response } from "express";
import { ActivityController } from "./controller/ActivityController";
import { CourseUnitController } from "./controller/CourseUnitController";
import { UserController } from "./controller/UserController";

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();

const routes = Router();

routes.post("/user", userController.create);
routes.post("/activity", activityController.create);
routes.post("/course_unit", courseUnitController.create);

export default routes;