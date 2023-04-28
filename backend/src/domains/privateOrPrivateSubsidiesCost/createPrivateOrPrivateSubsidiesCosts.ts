import { PublicOrPrivateSubsidiesCost } from "src/entities/publicOrPrivateSubsidiesCost";
import { ProjectSubsidiesCosts } from "src/services/project/dto";

export const createPrivateOrPrivateSubsidiesCosts = async (
    subsidiesCosts: ProjectSubsidiesCosts[],
): Promise<PublicOrPrivateSubsidiesCost[]> => {
   
    const newSubsidiesCosts = subsidiesCosts.map((cost) =>
    PublicOrPrivateSubsidiesCost.create({
            year: cost.year,
            fundedPersonellCosts: cost.fundedPersonellCosts,
            fundedContractorCostsInEU: cost.fundedContractorCostsInEU,
        }),
    );
    const savedSubsidiesCosts = await PublicOrPrivateSubsidiesCost.save(newSubsidiesCosts);
    return savedSubsidiesCosts;
};