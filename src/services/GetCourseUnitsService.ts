import { getRepository } from "typeorm";
import { CourseUnit } from "../model/CourseUnit";

interface UserId {
  id?: string
}

class GetCourseUnitsService {
  public async execute({ id }: UserId) {

    const courseUnitRepository = getRepository(CourseUnit);

    const courseUnits = await courseUnitRepository.find();

    if (!courseUnits) {
      return {
        error: "Course Units not found"
      }
    }

    return courseUnits;
  }
}

export { GetCourseUnitsService };