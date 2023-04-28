import { Text, Box, Flex, FlexProps, Link } from '@chakra-ui/react'
import { TextVariants } from 'theme'
import { ProjectStatus } from 'types/project'
import { UserRole } from 'types/user'

type Props = FlexProps & {
  projectId: number
  name: string
  projectStatus: ProjectStatus
  userRole: UserRole
}

const pendingProjectStatuses = [
  ProjectStatus.NOT_STARTED,
  ProjectStatus.STARTED,
  ProjectStatus.TYPE_FILLED_OUT,
  ProjectStatus.PERSONELL_FILLED_OUT,
  ProjectStatus.ECOSYSTEMS_FILLED_OUT,
  ProjectStatus.FROM_SCRATCH_FILLED_OUT,
]

const ProjectContainer = ({ name, projectId, children, projectStatus, userRole }: Props) => {
  const isInCreateMode = pendingProjectStatuses.includes(projectStatus)
  userRole = UserRole.PROJECT_MANAGER
  const hasAccessRights = isInCreateMode && userRole === UserRole.PROJECT_MANAGER
  const projectLink = hasAccessRights ? `/projects/${projectId}/create` : `/projects/${projectId}`

  return (
    <Flex mt={3} w="100%" px={5} pt={4} pb={6} borderWidth={1} borderColor="gray.500" borderRadius={4}>
      <Box w="100%">
        <Flex justifyContent="space-between" mb={6}>
          <Link href={projectLink}>
            <Text variant={TextVariants.P16Semibold} color="gray.800">
              {name}
            </Text>
          </Link>
        </Flex>
        {children}
      </Box>
    </Flex>
  )
}

export default ProjectContainer
