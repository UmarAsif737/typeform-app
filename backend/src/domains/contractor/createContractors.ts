import { Contractor } from "src/entities/contractor";
import { ProjectContractor } from "src/services/project/dto";


export const createContractors = async (
    contractors: ProjectContractor[],
): Promise<Contractor[]> => {
   
    const newContractors = contractors.map((contractor) =>
        Contractor.create({
            name: contractor.name,
            type: contractor.type,
            legalForm: contractor.legalForm,
            address: contractor.address,
            isGermanCompany: contractor.isGermanCompany,
            federalState: contractor.federalState,
            descriptionOfWork: contractor.descriptionOfWork,
            cost: contractor.cost,
            taxId: contractor.taxId,
        }),
    );
    const savedContractors = await Contractor.save(newContractors);
    return savedContractors;
};