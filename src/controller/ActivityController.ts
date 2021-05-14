import { Request, Response } from "express";
import { CreateActivityService } from "../services/CreateActivityService";
import { GetActivitiesService } from "../services/GetActivitiesService";

class ActivityController {
  async create(request: Request, response: Response) {
    const activityData = request.body;

    const createActivity = new CreateActivityService();

    const activity = await createActivity.execute(activityData);

    return response.json(activity);
  }

  async show(request: Request, response: Response) {
    const userId = request.body.user;

    const getActivities = new GetActivitiesService();

    const activities = await getActivities.execute(userId);

    return response.json(activities);
  }
}

export { ActivityController };