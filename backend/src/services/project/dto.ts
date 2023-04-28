import { UserRole } from "src/entities/user";

export class CreateProjectDto {
    name: string;
    calculatedTaxCredit: number;
    user: {
        firstName: string;
        lastName: string;
        email: string;
        role: UserRole
        password: string
    }
}

export class UpdateProjectDto {
    startOfProject?: string;
    startOfPeriod?: Date;
    endOfPeriod?: Date;
    type?: string;
    isRegisteredAtBSFZ?: boolean;
    bsfzProjectId?: string;
    majorityHasUniversityDegrees?: boolean;
    category?: string;
    isCompatibleWithExistingEcosystems?: boolean;
    majorityIsDevelopedFromScratch?: boolean;
    endGoalDescription?: string;
    compatibleEcosystems?: string;
    basisOfProject?: string;
    differenceToOtherProjects?: string;
    processDescription?: string;
    currentRAndDStatus?: string;
    distinguishmentWithinSector?: string;
    uniquenessOfProduct?: string;
    marketIntroduction?: string;
    hasEstimatedFigures?: boolean;
    isFundedBySubsidies?: boolean;
    hasPersonalDocumentsForEmployees?: boolean;
    hasWorkingTrackRecord?: boolean;
    contractors?: ProjectContractor[]
    researchPartners?: ProjectResearchPartners[]
    projectJournals?: ProjectJournalInput[]
    managerWorkingHours?: ProjectMangerWorkingHour[]
    financialFrameworks?: ProjectFinancialFramework[]
    personalFrameworks?: ProjectPersonalFramework[]
    publicOrPrivateSubsidiesCosts?: ProjectSubsidiesCosts[]
}

export class ProjectSubsidiesCosts {
    year: number;
    fundedPersonellCosts: number;
    fundedContractorCostsInEU: number;
}

export class ProjectPersonalFramework {
    year: number;
    personMonthsOfRD: number;
    personMonthsOfTechnicans: number;
    personMonthsOfOthers: number;
}

export class ProjectFinancialFramework {
    year: number;
    totalCost: number;
    personalCost: number;
    materialCostAndInvestment: number;
    contractorCostInEU: number;
    contractorCostOutsideEU: number;
    otherCost: number;
}

export class ProjectMangerWorkingHour {
    name: string;
    hour: string;
    task: string;
}

export class ProjectJournalInput {
    part: string;
    timeSlot: string;
    budget: number;
}

export class ProjectResearchPartners {
    name: string;
    type: string;
    legalForm: string;
    address: string;
    federalState: string;
    cost: number;
    taxId: string;
}

export class ProjectContractor {
    name: string;
    type: string;
    legalForm: string;
    address: string;
    isGermanCompany: boolean;
    federalState: string;
    descriptionOfWork: string;
    cost: number;
    taxId: string;
}

export class AssignUserDto {
    email: string;
    role: UserRole;
}

export class GeneralProjectDataDto {
    id: number;
    name: string;
    hasEstimatedFigures: boolean;
    isFundedBySubsidies: boolean;
    hasPersonalDocumentsForEmployees: boolean;
    hasWorkingTrackRecord: boolean;
}

export class ProjectDataDto {
    id: number;
    name: string;
    startOfProject: string;
    startOfPeriod: Date;
    endOfPeriod: Date;
    type: string;
    isRegisteredAtBSFZ: boolean;
    bsfzProjectId: string;
    majorityHasUniversityDegrees: boolean;
    category: string;
    isCompatibleWithExistingEcosystems: boolean;
    majorityIsDevelopedFromScratch: boolean;
    endGoalDescription: string;
    compatibleEcosystems: string;
    basisOfProject: string;
    differenceToOtherProjects: string;
    processDescription: string;
    currentRAndDStatus: string;
    distinguishmentWithinSector: string;
    uniquenessOfProduct: string;
    marketIntroduction: string;
}