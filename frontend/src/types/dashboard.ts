import { Project } from "./project";

export type DashboardData = {
    projects: Project[];
    companyName: string;
    totalRequestedFundingAmount: number;
    totalProjects: number;
    hasTaxCounsellor?: boolean

}