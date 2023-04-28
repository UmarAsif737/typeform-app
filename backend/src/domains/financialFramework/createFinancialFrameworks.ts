import { FinancialFramework } from "src/entities/financialFramework";
import { ProjectFinancialFramework } from "src/services/project/dto";

export const createFinancialFrameworks = async (
    financialFrameworks: ProjectFinancialFramework[],
): Promise<FinancialFramework[]> => {
   
    const newFinancialFrameworks = financialFrameworks.map((framework) =>
    FinancialFramework.create({
            year: framework.year,
            totalCost: framework.totalCost,
            personalCost: framework.personalCost,
            materialCostAndInvestment: framework.materialCostAndInvestment,
            contractorCostInEU: framework.contractorCostInEU,
            contractorCostOutsideEU: framework.contractorCostOutsideEU,
            otherCost: framework.otherCost,
        }),
    );
    const savedFinancialFrameworks = await FinancialFramework.save(newFinancialFrameworks);
    return savedFinancialFrameworks;
};