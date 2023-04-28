import { Company } from "src/entities/company"
import { CompanyNotFoundError } from "./errors";

export const checkForMissingCompanyDetails = async (companyId: number): Promise<boolean> => {
    const company = await Company.findOne({ where: { id: companyId } });
    if (!company) {
        throw new CompanyNotFoundError('id', String(companyId))
    }
    return (
        !company?.address || 
        !company.taxId || 
        !company.taxOfficeName || 
        !company.fundingYear ||
        !company.registerNumber ||
        !company.registerCourtName ||
        !company.legalRepresentatives ||
        !company.legalForm ||
        !company.industrySector ||
        !company.publicFundingAmount ||
        company.isGermanCompany === null ||
        company.isIndustrialWorkshopCompany === null ||
        company.isLegallyIndependent === null ||
        company.hasUpdatedElsterCertificate === null
    )
        
}