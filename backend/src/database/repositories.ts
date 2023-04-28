import { Company } from "../entities/company";
import { User } from "../entities/user";
import { Project } from "../entities/project";
import { SubCompany } from "../entities/subCompany";
import { Document } from "src/entities/document";
import { Contractor } from "src/entities/contractor";
import { CooperateResearchPartner } from "src/entities/cooperateResearchPartner";
import { FinancialFramework } from "src/entities/financialFramework";
import { FiscalYear } from "src/entities/fiscalYear";
import { ManagerWorkingHour } from "src/entities/managerWorkingHour";
import { PersonalFramework } from "src/entities/personalFramework";
import { ProjectJournal } from "src/entities/projectJournal";
import { PublicOrPrivateSubsidiesCost } from "src/entities/publicOrPrivateSubsidiesCost";

export const repositories = [
    Company,
    Contractor,
    CooperateResearchPartner,
    Document,
    FinancialFramework,
    FiscalYear,
    ManagerWorkingHour,
    PersonalFramework,
    Project,
    ProjectJournal,
    PublicOrPrivateSubsidiesCost,
    User,
    SubCompany,
]
