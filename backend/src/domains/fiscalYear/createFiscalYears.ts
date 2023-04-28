import { FiscalYear } from "src/entities/fiscalYear";
import { CompanyFiscalYear } from "src/services/company/dto";

export const createFiscalYears = async (
    fiscalYears: CompanyFiscalYear[],
): Promise<FiscalYear[]> => {
   
    const newFiscalYears = fiscalYears.map((fiscalYear) =>
    FiscalYear.create({
            year: fiscalYear.year,
            preliminaryData: fiscalYear.preliminaryData,
            abbreviatedFiscalYear: fiscalYear.abbreviatedFiscalYear,
            timePeriodOfFiscalYear: fiscalYear.timePeriodOfFiscalYear,
            numberOfEmployees: fiscalYear.numberOfEmployees,
            numberOfRDEmployees: fiscalYear.numberOfRDEmployees,
            revenue: fiscalYear.revenue,
            internalCostsPersonell: fiscalYear.internalCostsPersonell,
            internalCostsMaterial: fiscalYear.internalCostsMaterial,
            externalContractCostsInEU: fiscalYear.externalContractCostsInEU,
            externalContractCostsOutsideEU: fiscalYear.externalContractCostsOutsideEU,
        }),
    );
    const savedFiscalYears = await FiscalYear.save(newFiscalYears);
    return savedFiscalYears;
};