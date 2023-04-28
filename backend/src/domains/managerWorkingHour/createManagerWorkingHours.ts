import { ManagerWorkingHour } from "src/entities/managerWorkingHour";
import { ProjectMangerWorkingHour } from "src/services/project/dto";

export const createManagerWorkingHours = async (
    managerWorkingHours: ProjectMangerWorkingHour[],
): Promise<ManagerWorkingHour[]> => {
   
    const newManagerWorkingHours = managerWorkingHours.map((workingHour) =>
    ManagerWorkingHour.create({
            name: workingHour.name,
            hour: workingHour.hour,
            task: workingHour.task,
        }),
    );
    const savedManagerWorkingHours = await ManagerWorkingHour.save(newManagerWorkingHours);
    return savedManagerWorkingHours;
};