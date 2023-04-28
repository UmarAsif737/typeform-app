import { SubCompany } from "src/entities/subCompany";
import { SubCompanyDto } from "src/services/company/dto";

export const createSubCompanies = async (
    subCompanies: SubCompanyDto[],
): Promise<SubCompany[]> => {
   
    const newSubCompanies = subCompanies.map((subCompany) =>
    SubCompany.create({
            name: subCompany.name,
            address: subCompany.address,
            legalForm: subCompany.legalForm,
            federalState: subCompany.federalState,
            taxId: subCompany.taxId
        }),
    );
    const savedSubCompanies = await SubCompany.save(newSubCompanies);
    return savedSubCompanies;
};