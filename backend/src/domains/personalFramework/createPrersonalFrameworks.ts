import { PersonalFramework } from "src/entities/personalFramework";
import { ProjectPersonalFramework } from "src/services/project/dto";

export const createPersonalFrameworks = async (
    personalFrameworks: ProjectPersonalFramework[],
): Promise<PersonalFramework[]> => {
   
    const newPersonalFrameworks = personalFrameworks.map((framework) =>
    PersonalFramework.create({
            year: framework.year,
            personMonthsOfRD: framework.personMonthsOfRD,
            personMonthsOfTechnicans: framework.personMonthsOfTechnicans,
            personMonthsOfOthers: framework.personMonthsOfOthers,
        }),
    );
    const savedPersonalFrameworks = await PersonalFramework.save(newPersonalFrameworks);
    return savedPersonalFrameworks;
};