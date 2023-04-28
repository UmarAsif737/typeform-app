export type DashboardProject = {
    id: number;
    name: string;
    createdAt: Date;
    progress: string;
    requestedAmount: number;
    status: string;
}

export type Project = {
    id: number;
    name: string;
    status: ProjectStatus;
    calculatedTaxCredit: number;
    startOfProject: string;
    startOfPeriod: Date;
    endOfPeriod: Date;
    type: string;
    isRegisteredAtBSFZ: boolean;
    bsfzProjectId: string;
    majorityHasUniversityDegrees: boolean;
    mainContact: string;
    keywords: string;
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
    hasEstimatedFigures: boolean;
    isFundedBySubsidies: boolean;
    hasPersonalDocumentsForEmployees: boolean;
    hasWorkingTrackRecord: boolean;
    contractors?: ProjectContractor[]
    researchPartners?: ProjectResearchPartners[]
    projectJournals?: ProjectJournalInput[]
    managerWorkingHours?: ProjectMangerWorkingHour[]
    financialFrameworks?: ProjectFinancialFramework[]
    personalFrameworks?: ProjectPersonalFramework[]
    publicOrPrivateSubsidiesCosts?: ProjectSubsidiesCosts[]
}

export type ProjectSubsidiesCosts = {
    id?: number
    year: number;
    fundedPersonellCosts: number;
    fundedContractorCostsInEU: number;
}

export type ProjectPersonalFramework = {
    id?: number
    year: number;
    personMonthsOfRD: number;
    personMonthsOfTechnicans: number;
    personMonthsOfOthers: number;
}

export type ProjectFinancialFramework = {
    id?: number
    year: number;
    totalCost: number;
    personalCost: number;
    materialCostAndInvestment: number;
    contractorCostInEU: number;
    contractorCostOutsideEU: number;
    otherCost: number;
}

export type ProjectMangerWorkingHour = {
    id?: number
    name: string;
    hour: string;
    task: string;
}

export type ProjectJournalInput = {
    id?: number
    part: string;
    timeSlot: string;
    budget: number;
}

export type ProjectResearchPartners ={
    id?: number
    name: string;
    type: string;
    legalForm: string;
    address: string;
    federalState: string;
    cost: number;
    taxId: string;
}

export type ProjectContractor ={
    id?: number
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

export enum ProjectStatus {
    NOT_STARTED = 'not started', //default
    NOT_ELIGIBLE = 'not eligible',
    STARTED = 'started', //after passing startOfProject,
    TYPE_FILLED_OUT = 'type filled out', //after passing type
    PERSONELL_FILLED_OUT = 'personell filled out', //after passing personell question
    ECOSYSTEMS_FILLED_OUT = 'is compatible with ecosystems', //after passsing ecosystem compatability
    FROM_SCRATCH_FILLED_OUT = 'from scratch filled out', //after passing developing more than 60% from scratch
    AWAITING_TAX_CREDIT_PROCESS = 'awaiting tax credit process', //after filling out all questions
    BSFZ_REGISTRATION = 'bsfz registration', //bsfz registration
    ELSTER_FORMULA_UPLOADED = 'elster formula uploaded' //elster formula uploaded
}

export type Contractor = {
    id: string;
    name: string;
    address: string;
    isGermanCompany: boolean;
    legalForm: string;
    type: string;
    taxId: string;
    cost: number;
    federalState: string;
    descriptionOfWork: string;
}