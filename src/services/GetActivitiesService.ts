import { getRepository } from "typeorm";
import { Activity } from "../model/Activity";

interface UserId {
  id?: string;
}

class GetActivitiesService {
  public async execute({ id }: UserId) {
    console.log("Id do usuário da atividade: " + id);

    const activitiesRepository = getRepository(Activity);

    const activities = await activitiesRepository.find({ relations: ["course_unit"] });

    if (!activities) {
      return {
        error: "Activities not found"
      }
    }

    return activities;
  }
}

export { GetActivitiesService };