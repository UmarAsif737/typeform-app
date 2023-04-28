import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { repositories } from './repositories';

const configService = new ConfigService();
const host = configService.get('POSTGRES_HOST');
const port = configService.get('POSTGRES_PORT');
const username = configService.get('POSTGRES_USER');
// const password = configService.get('POSTGRES_PASSWORD');
const database = configService.get('POSTGRES_DB');

export const AppDataSource = new DataSource({
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port,
    username: 'charlottehetzler',
    // password,
    database: 'innobutler',
    migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
    entities: repositories,
    synchronize: false,
    migrationsRun: true,
});
