import { setSeederFactory } from 'typeorm-extension';
import { Project, ProjectStatus } from '../../entities/project';
import { faker } from '@faker-js/faker';
import { getRandomItemFromArray } from '../seeds/helper';

setSeederFactory(Project, () => {
    const name = `${faker.lorem.word().toUpperCase()} Project`;
    const projectStatus = getRandomItemFromArray([
        ProjectStatus.NOT_STARTED,
    ]);
    const calculatedTaxCredit = faker.datatype.number(100000);
    const startOfProject = getRandomItemFromArray([
        "before January '20",
        "after January '20",
        "after July 30th '20",
    ]);
    const startOfPeriod = faker.date.past();
    const endOfPeriod = faker.date.future();
    const type = getRandomItemFromArray([
        "Fundamental Research",
        "Industrial Research",
        "Experimental Development",
    ]);
    const isRegisteredAtBSFZ = faker.datatype.boolean();
    const bsfzProjectId = faker.datatype.string(10);
    const majorityHasUniversityDegrees = faker.datatype.boolean();
    const category = getRandomItemFromArray([
        "Full Internal research",
        "Full Contract research (R&D fully commissioned)",
        "Pro Rata Contract research (R&D partially commissioned)"
    ])


    const project = new Project();
    project.name = name;
    project.status = projectStatus;
    project.calculatedTaxCredit = calculatedTaxCredit;
    project.startOfProject = startOfProject;
    project.startOfPeriod = startOfPeriod;
    project.endOfPeriod = endOfPeriod;
    project.type = type;
    project.isRegisteredAtBSFZ = isRegisteredAtBSFZ;
    project.bsfzProjectId = bsfzProjectId;
    project.majorityHasUniversityDegrees = majorityHasUniversityDegrees;
    project.category = category;


    return project;
});