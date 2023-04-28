import { Project } from "src/entities/project"

export const calculateTotalRequestedFundingAmount = (projects: Project[]): number => {
    return projects.reduce((acc, i) => acc + i.calculatedTaxCredit, 0);
}