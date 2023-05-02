import { setSeederFactory } from 'typeorm-extension';
import { User, UserRole } from '../../entities/user';

setSeederFactory(User, () => {
    const firstName = 'Charly';
    const lastName = 'Hetzler';
    const email = 'charly@hetzler.de';
    const password = '$2a$10$JutGqygCl3rsFR6jvgZ8MOTZJlujxNHq.Ywu71hqZPSu/tLMaQwma';
    const isLegalRepresentative = false
    const role = UserRole.ADMIN

    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;
    user.isLegalRepresentative = isLegalRepresentative;

    return user;
});