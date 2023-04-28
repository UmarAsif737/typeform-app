import { Project } from "src/entities/project";

export class DashboardData {
    projects: Project[];
    companyName: string;
    totalRequestedFundingAmount: number;
    totalProjects: number;
    hasTaxCounsellor?: boolean
    hasMissingCompanyDetails?: boolean
}