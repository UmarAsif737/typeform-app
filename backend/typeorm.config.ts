import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();
const host = configService.get('POSTGRES_HOST');
const port = configService.get('POSTGRES_PORT');
const username = configService.get('POSTGRES_USER');
const password = configService.get('POSTGRES_PASSWORD');
const database = configService.get('POSTGRES_DB');

if (!(host && port && username && database)) {
    throw new Error('Missing POSTGRES environment variables for migrations');
}

export default new DataSource({
    type: 'postgres',
    host,
    port: Number(port),
    username,
    password,
    database,
    entities: [__dirname + '/src/entities/*.{ts,js}'],
    migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
});
