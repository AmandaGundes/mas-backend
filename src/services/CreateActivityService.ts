import { getRepository } from "typeorm";
import { Activity } from "../model/Activity";

interface ActivityData {
  name: string;
  activity_date: string;
  grade: number;
  course_unit_id: string;
}

class CreateActivityService {

  public async execute({ name, activity_date, grade, course_unit_id }: ActivityData) {

    const activitiesRepository = getRepository(Activity);

    const activity = activitiesRepository.create({
      name,
      activity_date,
      grade,
      course_unit_id
    });

    await activitiesRepository.save(activity);

    return activity;
  }
}

export { CreateActivityService };