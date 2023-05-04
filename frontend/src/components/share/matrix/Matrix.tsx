import { useMemo } from 'react'
import { Input, Text } from '@chakra-ui/react'
import ContractorForm from './contractor/ContractorForm'
import FinancialFrameworkForm from './financialFramework/FinancialFrameworkForm'
import ManagerWorkingHourForm from './managerWorkingHour/ManagerWorkingHourForm'
import PersonalFrameworkForm from './personalFramework/PersonalFrameworkForm'
import ProjectJournalForm from './projectJournal/ProjectJournalForm'
import PublicOrPrivateSubsidiaryForm from './publicOrPrivateSubsidiary/PublicOrPrivateSubsidiaryForm'
import ResearchPartnerForm from './researchPartners/ResearchPartnerForm'
import { useTranslation } from 'react-i18next'
import { InputVariants, TextVariants } from 'theme'
import { Cell } from 'react-table'
import SimpleTable from 'components/Table/SimpleTable'
import SubCompanyForm from './subCompany/SubCompanyForm'

type Props = {
  questionKey: string
  isDisabled?: boolean
  state: any
  setState: any
}

export default function Matrix({ questionKey, isDisabled = true, state, setState }: Props) {
  const { t } = useTranslation()

  const contractorsColumns = useMemo(() => {
    return [
      {
        accessor: 'name',
        Header: t('projects.questions.details.contractors.name'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'type',
        Header: t('projects.questions.details.contractors.type'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'legalForm',
        Header: t('projects.questions.details.contractors.legalForm'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'address',
        Header: t('projects.questions.details.contractors.address'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'isGermanCompany',
        Header: t('projects.questions.details.contractors.isGermanCompany'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'federalState',
        Header: t('projects.questions.details.contractors.federalState'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'descriptionOfWork',
        Header: t('projects.questions.details.contractors.descriptionOfWork'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'cost',
        Header: t('projects.questions.details.contractors.cost'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'taxId',
        Header: t('projects.questions.details.contractors.taxId'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const researchPartnersColumns = useMemo(() => {
    return [
      {
        accessor: 'name',
        Header: t('projects.questions.details.researchPartners.name'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'type',
        Header: t('projects.questions.details.researchPartners.type'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'legalForm',
        Header: t('projects.questions.details.researchPartners.legalForm'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'address',
        Header: t('projects.questions.details.researchPartners.address'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'federalState',
        Header: t('projects.questions.details.researchPartners.federalState'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'cost',
        Header: t('projects.questions.details.researchPartners.cost'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'taxId',
        Header: t('projects.questions.details.researchPartners.taxId'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const projectJournalsColumns = useMemo(() => {
    return [
      {
        accessor: 'part',
        Header: t('projects.questions.details.projectJournal.part'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'timeSlot',
        Header: t('projects.questions.details.projectJournal.timeSlot'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'budget',
        Header: t('projects.questions.details.projectJournal.budget'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const managerWorkingHoursColumns = useMemo(() => {
    return [
      {
        accessor: 'year',
        Header: t('projects.questions.details.managerWorkingHour.name'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'hour',
        Header: t('projects.questions.details.managerWorkingHour.hour'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'task',
        Header: t('projects.questions.details.managerWorkingHour.task'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const financialFrameworkColumns = useMemo(() => {
    return [
      {
        accessor: 'year',
        Header: t('projects.questions.general.financialFramework.year'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'totalCost',
        Header: t('projects.questions.general.financialFramework.totalCost'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'personalCost',
        Header: t('projects.questions.general.financialFramework.personalCost'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'materialCostAndInvestment',
        Header: t('projects.questions.general.financialFramework.materialCostAndInvestment'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'contractorCostInEU',
        Header: t('projects.questions.general.financialFramework.contractorCostInEU'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'contractorCostOutsideEU',
        Header: t('projects.questions.general.financialFramework.contractorCostOutsideEU'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'otherCost',
        Header: t('projects.questions.general.financialFramework.otherCost'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const personalFrameworkColumns = useMemo(() => {
    return [
      {
        accessor: 'year',
        Header: t('projects.questions.general.personalFramework.year'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'personMonthsOfRD',
        Header: t('projects.questions.general.personalFramework.personMonthsOfRD'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'personMonthsOfTechnicans',
        Header: t('projects.questions.general.personalFramework.personMonthsOfTechnicans'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'personMonthsOfOthers',
        Header: t('projects.questions.general.personalFramework.personMonthsOfOthers'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const subsidiesCostsColumns = useMemo(() => {
    return [
      {
        accessor: 'year',
        Header: t('projects.questions.general.subsidiary.year'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'fundedPersonellCosts',
        Header: t('projects.questions.general.subsidiary.fundedPersonellCosts'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'fundedContractorCostsInEU',
        Header: t('projects.questions.general.subsidiary.fundedContractorCostsInEU'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const subCompaniesColumns = useMemo(() => {
    return [
      {
        accessor: 'name',
        Header: t('company.details.subCopmany.name'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'address',
        Header: t('company.details.subCopmany.address'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'legalForm',
        Header: t('company.details.subCopmany.legalForm'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'federalState',
        Header: t('company.details.subCopmany.federalState'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'taxId',
        Header: t('company.details.subCopmany.taxId'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const fiscalYearsColumns = useMemo(() => {
    return [
      {
        accessor: 'year',
        Header: t('company.details.fiscalYear.year'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'preliminaryData',
        Header: t('company.details.fiscalYear.preliminaryData'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'abbreviatedFiscalYear',
        Header: t('company.details.fiscalYear.abbreviatedFiscalYear'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'timePeriodOfFiscalYear',
        Header: t('company.details.fiscalYear.timePeriodOfFiscalYear'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'numberOfEmployees',
        Header: t('company.details.fiscalYear.numberOfEmployees'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'numberOfRDEmployees',
        Header: t('company.details.fiscalYear.numberOfRDEmployees'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'revenue',
        Header: t('company.details.fiscalYear.revenue'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'internalCostsPersonell',
        Header: t('company.details.fiscalYear.internalCostsPersonell'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'internalCostsMaterial',
        Header: t('company.details.fiscalYear.internalCostsMaterial'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'externalContractCostsInEU',
        Header: t('company.details.fiscalYear.externalContractCostsInEU'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
      {
        accessor: 'externalContractCostsOutsideEU',
        Header: t('company.details.fiscalYear.externalContractCostsOutsideEU'),
        Cell: ({ value }: Cell) => <Input value={value} variant={InputVariants.ReadOnly} isDisabled={isDisabled} />,
      },
    ]
  }, [t])

  const data = useMemo(() => state, [state])
  console.log(data)
  switch (questionKey) {
    case 'contractors': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={contractorsColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.details.contractors.noContractors')}
          </Text>
        )
      }
      return <ContractorForm state={state} setState={setState} />
    }

    case 'researchPartners': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={researchPartnersColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.details.researchPartner.noResearchPartners')}
          </Text>
        )
      }
      return <ResearchPartnerForm state={state} setState={setState} />
    }

    case 'projectJournals': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={projectJournalsColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.details.projectJournal.noProjectJournals')}
          </Text>
        )
      }
      return <ProjectJournalForm state={state} setState={setState} />
    }

    case 'managerWorkingHours': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={managerWorkingHoursColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.details.managerWorkingHour.noManagerWorkingHours')}
          </Text>
        )
      }
      return <ManagerWorkingHourForm state={state} setState={setState} />
    }

    case 'financialFrameworks': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={financialFrameworkColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.general.financialFramework.noFinancialFrameworks')}
          </Text>
        )
      }
      return <FinancialFrameworkForm state={state} setState={setState} />
    }

    case 'personalFrameworks': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={personalFrameworkColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.general.personalFramework.noPersonalFrameworks')}
          </Text>
        )
      }
      return <PersonalFrameworkForm state={state} setState={setState} />
    }

    case 'publicOrPrivateSubsidies': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={subsidiesCostsColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('projects.questions.general.subsidiary.noSubsidiesCosts')}
          </Text>
        )
      }

      return <PublicOrPrivateSubsidiaryForm state={state} setState={setState} />
    }

    case 'subCompanies': {
      if (data && isDisabled) {
        return data?.length ? (
          <SimpleTable columns={subCompaniesColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('company.details.subCopmany.noSubCompanies')}
          </Text>
        )
      }
      return <SubCompanyForm state={state} setState={setState} />
    }

    case 'fiscalYears': {
      if (data && isDisabled) {
        return data?.length > 0 ? (
          <SimpleTable columns={fiscalYearsColumns} data={data} />
        ) : (
          <Text variant={TextVariants.P14Standart} color="gray.500">
            {t('company.details.fiscalYear.noFiscalYears')}
          </Text>
        )
      }
      return <SubCompanyForm state={state} setState={setState} />
    }

    default:
      return null
  }
}
