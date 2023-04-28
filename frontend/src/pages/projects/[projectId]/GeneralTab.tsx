import { Project } from 'types/project'
import GeneralQuestions from './general/GeneralQuestions'
import { Flex, Button } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import router from 'next/router'
import { RiEdit2Fill } from 'react-icons/ri'
import { UserRole } from 'types/user'
import { useTranslation } from 'react-i18next'

type Props = {
  project: Project
  userRole: UserRole
}

const GeneralTab = ({ project, userRole }: Props) => {
  const { t } = useTranslation()

  return (
    <Flex direction="column" justifyContent="flex-start" minHeight="70vh" mb={8} w="100%">
      <NextSeo title="Company Details" />
      {userRole === UserRole.TAX_COUNSELLOR ||
        (userRole === UserRole.CFO && (
          <Flex mt="5" justify="flex-end">
            <Button
              leftIcon={<RiEdit2Fill />}
              variant="solid"
              onClick={() => router.push(`/projects/${project.id}/general/edit`)}
            >
              {t('buttons.edit')}
            </Button>
          </Flex>
        ))}

      <GeneralQuestions isDisabled={true} project={project} />
    </Flex>
  )
}

export default GeneralTab
