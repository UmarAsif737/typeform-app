import { Company } from 'src/entities/company';
import { Contractor } from 'src/entities/contractor';
import { Project } from 'src/entities/project';
import { User } from 'src/entities/user';
import { Seeder } from 'typeorm-extension';


export default class InitialSeed implements Seeder {
    public async run(factory): Promise<void> {
               
        const primaryUser = await factory(User)().create();
        const primaryUserCompany = await factory(Company)().create();
        await primaryUserCompany.save()
       
        primaryUser.company = primaryUserCompany;
        await primaryUser.save();


        const contractors =  await factory(Contractor)().createMany(10);
        const projects = await factory(Project)()
            .map(async (project) => {
                project.company = primaryUserCompany;
                return project;
            })
            .createMany(5);

        for (const project of projects) {
            project.contractors = contractors;
            await project.save();
         }
    }
}
