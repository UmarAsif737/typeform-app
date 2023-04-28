import { ProjectJournal } from "src/entities/projectJournal";
import { ProjectJournalInput } from "src/services/project/dto";

export const createProjectJournals = async (
    projectJournals: ProjectJournalInput[],
): Promise<ProjectJournal[]> => {
   
    const newJournals = projectJournals.map((journal) =>
        ProjectJournal.create({
            part: journal.part,
            timeSlot: journal.timeSlot,
            budget: journal.budget,
        }),
    );
    const savedJournals = await ProjectJournal.save(newJournals);
    return savedJournals;
};