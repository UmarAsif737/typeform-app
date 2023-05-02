import { setSeederFactory } from 'typeorm-extension';
import { faker } from '@faker-js/faker';
import { Contractor } from 'src/entities/contractor';

setSeederFactory(Contractor, () => {
    const name = faker.company.name();
    const address = faker.address.streetAddress();
    const legalForm = faker.company.name();
    const isGermanCompany = faker.datatype.boolean();
    const federalState = faker.address.state();
    const descriptionOfWork = faker.lorem.word().toUpperCase()
    const taxId = faker.datatype.string(10);
    const cost = faker.datatype.number(100000);
    

    const contractor = new Contractor();
    contractor.name = name;
    contractor.type = "Contractor";
    contractor.address = address;
    contractor.legalForm = legalForm;
    contractor.isGermanCompany = isGermanCompany;
    contractor.federalState = federalState;
    contractor.descriptionOfWork = descriptionOfWork;
    contractor.taxId = taxId;
    contractor.cost = cost;

    return contractor;
});