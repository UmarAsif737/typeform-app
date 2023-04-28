import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationModule } from './controllers/authentication/authentication.module';
import { CompanyModule } from './controllers/company/company.module';
import { DocumentModule } from './controllers/document/document.module';
import { ProjectModule } from './controllers/project/project.module';
import { UserModule } from './controllers/user/user.module';
import { CustomTypeOrmModule } from './database/typeORM.module';
import { RolesGuard } from './domains/authentication/guards/roleGuard';
import { JwtAuthGuard } from './domains/authentication/guards/jwtAuthGuard';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DashboardModule } from './controllers/dashboard/dashboard.module';

@Module({
  imports: [
    CustomTypeOrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: false,
    }),
    AuthenticationModule,
    UserModule,
    CompanyModule, 
    ProjectModule,
    DocumentModule,
    DashboardModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
