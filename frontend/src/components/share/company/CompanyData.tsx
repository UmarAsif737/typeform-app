import { Text, Box, HStack, Input, Switch, VStack, Flex, Button } from '@chakra-ui/react'
import { ToastStatus } from 'config/types'
import useCustomToast from 'hooks/useCustomToast'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { updateCompany } from 'pages/company-details/_api/updateCompany'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ButtonVariants, InputVariants, TextVariants } from 'theme'
import { Company } from 'types/company'
import Matrix from '../matrix/Matrix'

type Props = {
  company?: Company
  isEdit: boolean
}

const CompanyData = ({ company, isEdit }: Props) => {
  const { t } = useTranslation()
  const { toast } = useCustomToast()
  const { data: session } = useSession()
  const router = useRouter()

  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [inputVariant, setInputVariant] = useState(InputVariants.ReadOnly)
  const [subCompanies, setSubCompanies] = useState<any>()
  const [fiscalYears, setFiscalYears] = useState<any>()

  const handleGoBack = () => {
    router.back()
  }

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm()

  useEffect(() => {
    if (isEdit) {
      setInputVariant(InputVariants.WithBorder)
      setIsDisabled(false)
    }
  }, [isEdit])

  const fulfillFields = async () => {
    setValue('name', company?.name ?? undefined)
    setValue('address', company?.address ?? undefined)
    setValue('isGermanCompany', company?.isGermanCompany ?? false)
    setValue('taxId', company?.taxId ?? undefined)
    setValue('taxOfficeName', company?.taxOfficeName ?? undefined)
    setValue('fundingYear', company?.fundingYear ?? undefined)
    setValue('registerNumber', company?.registerNumber ?? undefined)
    setValue('registerCourtName', company?.registerCourtName ?? undefined)
    setValue('legalRepresentatives', company?.legalRepresentatives ?? undefined)
    setValue('legalForm', company?.legalForm ?? undefined)
    setValue('industrySector', company?.industrySector ?? undefined)
    setValue('isIndustrialWorkshopCompany', company?.isIndustrialWorkshopCompany ?? undefined)
    setValue('isLegallyIndependent', company?.isLegallyIndependent ?? undefined)
    setValue('hasUpdatedElsterCertificate', company?.hasUpdatedElsterCertificate ?? undefined)
    setValue('publicFundingAmount', company?.publicFundingAmount ?? undefined)
  }

  const formatData = async () => {
    const values = getValues()

    // const formatedSubCompanies = subCompanies
    //   ? Object.values(subCompanies?.subCompaniesState).map((subCompany: any) => {
    //       return {
    //         name: subCompany.name,
    //         address: subCompany.address,
    //         legalForm: subCompany.legalForm,
    //         federalState: subCompany.federalState,
    //         taxId: subCompany.taxId,
    //       }
    //     })
    //   : undefined

    // const formatedFiscalYears = fiscalYears
    //   ? Object.values(fiscalYears?.fiscalYearState).map((fiscalYear: any) => {
    //       return {
    //         year: fiscalYear.year,
    //         preliminaryData: fiscalYear.preliminaryData,
    //         abbreviatedFiscalYear: fiscalYear.abbreviatedFiscalYear,
    //         timePeriodOfFiscalYear: fiscalYear.timePeriodOfFiscalYear,
    //         numberOfEmployees: fiscalYear.numberOfEmployees,
    //         numberOfRDEmployees: fiscalYear.numberOfRDEmployees,
    //         revenue: fiscalYear.revenue,
    //         internalCostsPersonell: fiscalYear.internalCostsPersonell,
    //         internalCostsMaterial: fiscalYear.internalCostsMaterial,
    //         externalContractCostsInEU: fiscalYear.externalContractCostsInEU,
    //         externalContractCostsOutsideEU: fiscalYear.externalContractCostsOutsideEU,
    //       }
    //     })
    //   : undefined

    return {
      name: values.name,
      address: values.address,
      isGermanCompany: values.isGermanCompany,
      taxId: values.taxId,
      taxOfficeName: values.taxOfficeName,
      fundingYear: values.fundingYear,
      registerNumber: values.registerNumber,
      registerCourtName: values.registerCourtName,
      legalRepresentatives: values.legalRepresentatives,
      legalForm: values.legalForm,
      industrySector: values.industrySector,
      isIndustrialWorkshopCompany: values.isIndustrialWorkshopCompany,
      isLegallyIndependent: values.isLegallyIndependent,
      hasUpdatedElsterCertificate: values.hasUpdatedElsterCertificate,
      publicFundingAmount: values.publicFundingAmount,
      subCompanies: subCompanies,
      // fiscalYears: formatedFiscalYears,
    }
  }

  useEffect(() => {
    fulfillFields()
    setSubCompanies(company?.subCompanies)
  }, [company])

  const onSubmit = async () => {
    const token = session?.user?.accessToken as string
    const formatedResponse = await formatData()
    try {
      await updateCompany(token, formatedResponse)

      toast(
        ToastStatus.SUCCESS,
        t('company.details.edit.success'),
        t('company.details.edit.success.sucesfullyUpdatedYourCompany'),
        'companyEditSuccess'
      )
    } catch (err) {
      toast(
        ToastStatus.ERROR,
        t('company.details.edit.error'),
        t('company.details.edit.error.errorWhileUpdatingYourCompany'),
        'companyEditError'
      )
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <VStack w="100%" alignItems="flex-start" gap={5}>
        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="100%">
            <Text variant={TextVariants.P14Semibold} color="gray.500">
              {t('company.details.name')}
            </Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="name"
                placeholder={t('company.details.namePlaceholder')}
                {...register('name', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </HStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.address')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="address"
                placeholder={t('company.details.addressPlaceholder')}
                {...register('address', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>

          <Box w="50%" mt={5}>
            <Text variant={TextVariants.P14Semibold} mb={5}>
              {t('company.details.isGermanCompany')}
            </Text>
            <Switch
              id="isGermanCompany"
              {...register('isGermanCompany', {
                required: 'This is required',
              })}
              // isChecked={company.isGermanCompany}
              isDisabled={isDisabled}
              colorScheme="red"
            />
          </Box>
        </HStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.taxId')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="taxId"
                placeholder={t('company.details.taxId')}
                {...register('taxId', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>

          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.taxOfficeName')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="taxOfficeName"
                placeholder={t('company.details.taxOfficeName')}
                {...register('taxOfficeName', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </HStack>

        <VStack alignItems="flex-start" w="100%">
          <Text variant={TextVariants.P14Semibold}>{t('company.details.fundingYear')}</Text>
          <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
            <Input
              id="fundingYear"
              placeholder={t('company.details.fundingYear')}
              {...register('fundingYear', {
                required: 'This is required',
              })}
              isReadOnly={isDisabled}
              variant={inputVariant}
            />
          </Box>
        </VStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.registerNumber')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="registerNumber"
                placeholder={t('company.details.registerNumber')}
                {...register('registerNumber', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>

          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.registerCourtName')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="registerCourtName"
                placeholder={t('company.details.registerCourtName')}
                {...register('registerCourtName', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </HStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.legalRepresentatives')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="legalRepresentatives"
                placeholder={t('company.details.legalRepresentatives')}
                {...register('legalRepresentatives', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>

          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.legalForm')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="legalForm"
                placeholder={t('company.details.legalForm')}
                {...register('legalForm', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>
        </HStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold}>{t('company.details.industrySector')}</Text>
            <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
              <Input
                id="industrySector"
                placeholder={t('company.details.industrySector')}
                {...register('industrySector', {
                  required: 'This is required',
                })}
                isReadOnly={isDisabled}
                variant={inputVariant}
              />
            </Box>
          </VStack>

          <Box w="50%" mt={5}>
            <Text variant={TextVariants.P14Semibold} mb={5}>
              {t('company.details.isIndustrialWorkshopCompany')}
            </Text>
            <Switch
              id="isIndustrialWorkshopCompany"
              {...register('isIndustrialWorkshopCompany', {
                required: 'This is required',
              })}
              // isChecked={company.hasUpdatedElsterCertificate}
              isDisabled={isDisabled}
            />
          </Box>
        </HStack>

        <VStack alignItems="flex-start" w="100%" pb={5}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('company.details.subCopmany.title')}
          </Text>
          {subCompanies && (
            <Matrix
              state={subCompanies}
              setState={setSubCompanies}
              questionKey="subCompanies"
              isDisabled={isDisabled}
            />
          )}
        </VStack>

        <VStack alignItems="flex-start" w="100%" pb={5}>
          <Text variant={TextVariants.P14Semibold} color="gray.500">
            {t('company.details.fiscalYear.title')}
          </Text>
          {/* <Matrix state={fiscalYears} setState={setFiscalYears} questionKey="fiscalYears" isDisabled={isDisabled} /> */}
        </VStack>

        <HStack alignItems="flex-start" gap={5} w="100%">
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold} mb={5}>
              {t('company.details.isLegallyIndependent')}
            </Text>
            <Switch
              id="isLegallyIndependent"
              {...register('isLegallyIndependent', {
                required: 'This is required',
              })}
              // isChecked={company.hasUpdatedElsterCertificate}
              isDisabled={isDisabled}
            />
          </VStack>
          <VStack alignItems="flex-start" w="50%">
            <Text variant={TextVariants.P14Semibold} mb={5}>
              {t('company.details.hasUpdatedElsterCertificate')}
            </Text>
            <Switch
              id="hasUpdatedElsterCertificate"
              {...register('hasUpdatedElsterCertificate', {
                required: 'This is required',
              })}
              // isChecked={company.hasUpdatedElsterCertificate}
              isDisabled={isDisabled}
            />
          </VStack>
        </HStack>

        <VStack alignItems="flex-start" w="100%">
          <Text variant={TextVariants.P14Semibold}>{t('company.details.publicFundingAmount')}</Text>
          <Box w="100%" borderWidth={1} borderColor="gray.300" borderRadius={4}>
            <Input
              id="publicFundingAmount"
              placeholder={t('company.details.publicFundingAmount')}
              {...register('publicFundingAmount', {
                required: 'This is required',
              })}
              isReadOnly={isDisabled}
              variant={inputVariant}
            />
          </Box>
        </VStack>
      </VStack>

      {isEdit && (
        <Flex justifyContent="space-between" mt={20} mb="10rem">
          <Button variant={ButtonVariants.Secondary} width="33.33%" onClick={handleGoBack}>
            {t('buttons.cancel')}
          </Button>
          <Button variant={ButtonVariants.Primary} mr="1rem" width="33.33%" type="submit">
            {t('buttons.save')}
          </Button>
        </Flex>
      )}
    </form>
  )
}

export default CompanyData
