import { CooperateResearchPartner } from "src/entities/cooperateResearchPartner";
import { ProjectResearchPartners } from "src/services/project/dto";

export const createCooperateResearchPartner = async (
    researchPartners: ProjectResearchPartners[],
): Promise<CooperateResearchPartner[]> => {
   
    const newPartners = researchPartners.map((partner) =>
    CooperateResearchPartner.create({
            name: partner.name,
            type: partner.type,
            address: partner.address,
            legalForm: partner.legalForm,
            federalState: partner.federalState,
            taxId: partner.taxId,
            cost: partner.cost,
        }),
    );
    const savedPartners = await CooperateResearchPartner.save(newPartners);
    return savedPartners;
};