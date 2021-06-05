import { getRepository } from "typeorm";
import { Activity } from "../model/Activity";

interface UserId {
  id?: string
}

class GetActivitiesService {
  public async execute({ id }: UserId) {

    const activitiesRepository = getRepository(Activity);

    const activities = await activitiesRepository.find();

    if (!activities) {
      return {
        error: "Activities not found"
      }
    }

    return activities;
  }
}

export { GetActivitiesService };