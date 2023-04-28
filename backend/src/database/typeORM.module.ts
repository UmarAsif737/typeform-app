import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppDataSource } from './datasource';

@Global()
@Module({
    imports: [],
    providers: [
        {
            provide: DataSource,
            useFactory: async () => {
                await AppDataSource.initialize();
                return AppDataSource;
            },
        },
    ],
    exports: [DataSource],
})
export class CustomTypeOrmModule {}
