export enum CompanyStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
}

export type Company = {
    name: string;
    status: CompanyStatus;
    address: string;
    isGermanCompany: boolean;
    taxId: string;
    taxOfficeName: string;
    fundingYear: number;
    registerNumber: string;
    registerCourtName: string;
    legalRepresentatives: string;
    legalForm: string;
    industrySector: string;
    isIndustrialWorkshopCompany: boolean;
    isLegallyIndependent: boolean;
    hasUpdatedElsterCertificate: boolean;
    publicFundingAmount: number;
}

export type CreateCompanyDto = {
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
}

export type UpdateCompanyDto = CreateCompanyDto;