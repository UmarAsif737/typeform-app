import { UserRole } from "src/entities/user";

export class CreateCompanyDto {
    name: string;
    address?: string;
    isGermanCompany?: boolean;
    taxId?: string;
    taxOfficeName?: string;
    fundingYear?: number;
    registerNumber?: string;
    registerCourtName?: string;
    legalRepresentatives?: string;
    legalForm?: string;
    industrySector?: string;
    isIndustrialWorkshopCompany?: boolean;
    isLegallyIndependent?: boolean;
    hasUpdatedElsterCertificate?: boolean;
    publicFundingAmount?: number;
    subCompanies?: SubCompanyDto[];
    fiscalYears?: CompanyFiscalYear[]
}

export class CompanyFiscalYear {
    year: number
    preliminaryData: number;
    abbreviatedFiscalYear: string
    timePeriodOfFiscalYear: string
    numberOfEmployees: number
    numberOfRDEmployees: number
    revenue: number
    internalCostsPersonell: number
    internalCostsMaterial: number
    externalContractCostsInEU: number
    externalContractCostsOutsideEU: number
}

export class SubCompanyDto {
    name: string;
    address: string;
    legalForm: string;
    federalState: string;
    taxId: string
}

export type UpdateCompanyDto = CreateCompanyDto;

export class AssignUseroToCompanyDto {
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
}