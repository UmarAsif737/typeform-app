import { setSeederFactory } from 'typeorm-extension';
import { Company, CompanyStatus } from '../../entities/company';
import { faker } from '@faker-js/faker';

setSeederFactory(Company, () => {
    const name = faker.company.name();
    const address = faker.address.streetAddress();
    const isGermanCompany = faker.datatype.boolean();
    const taxId = faker.datatype.string(10);
    const taxOfficeName = faker.company.name();
    

    const company = new Company();
    company.name = name;
    company.status = CompanyStatus.CONFIRMED
    company.address = address;
    company.isGermanCompany = isGermanCompany;
    company.taxId = taxId;
    company.taxOfficeName = taxOfficeName;

    return company;
});