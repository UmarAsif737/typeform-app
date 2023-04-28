import { ProjectStatus } from "src/entities/project";

export const handleProjectStatus = (status: ProjectStatus, project): ProjectStatus => {

    if (status === ProjectStatus.NOT_STARTED) {
        if (project.startOfProject === "before January '20") {
            return ProjectStatus.NOT_ELIGIBLE;
        }
        return ProjectStatus.STARTED;
    }
    if (status === ProjectStatus.STARTED) {
        if (
            project.type === 'Market development/research' || 
            project.type === 'Improvement of production system/ refresh of a product cylce'
        ) {
            return ProjectStatus.NOT_ELIGIBLE;
        }
        return ProjectStatus.TYPE_FILLED_OUT;
    }
    if (status === ProjectStatus.TYPE_FILLED_OUT) {
        if (!project.majorityHasUniversityDegrees) {
            return ProjectStatus.NOT_ELIGIBLE;
        }
        return ProjectStatus.PERSONELL_FILLED_OUT
    }

    if (status === ProjectStatus.PERSONELL_FILLED_OUT) {
        if (!project.isCompatibleWithExistingEcosystems) {
            return ProjectStatus.NOT_ELIGIBLE;
        }
        return ProjectStatus.ECOSYSTEMS_FILLED_OUT;
    }
    if (status === ProjectStatus.ECOSYSTEMS_FILLED_OUT) {
        if (!project.majorityIsDevelopedFromScratch) {
            return ProjectStatus.NOT_ELIGIBLE;
        }
        return ProjectStatus.FROM_SCRATCH_FILLED_OUT;
    }
    if (status === ProjectStatus.FROM_SCRATCH_FILLED_OUT) {
        return ProjectStatus.AWAITING_TAX_CREDIT_PROCESS;
    }

    return status
}