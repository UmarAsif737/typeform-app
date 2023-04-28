import { Company } from "src/entities/company"
import { UserRole } from "src/entities/user";
import { CompanyNotFoundError } from "../company/errors";

export const checkForExistingTaxCounsellor = async (companyId: number): Promise<boolean> => {
    const company = await Company.findOne({ where: { id: companyId }, relations: ['users'] });
    if (!company) {
        throw new CompanyNotFoundError('id', String(companyId));
    }

    const hasTaxCounsellor = company.users.filter((user) => user.role === UserRole.TAX_COUNSELLOR);
    return hasTaxCounsellor.length > 0;
}