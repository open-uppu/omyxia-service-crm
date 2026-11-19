import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { PipelinesModule } from './modules/pipelines/pipelines.module';
import { LeadsModule } from './modules/leads/leads.module';
import { ActivitiesModule } from './modules/activities/activities.module';
import { CustomersModule } from './modules/customers/customers.module';
import { TenantContextMiddleware } from './common/tenant-context.middleware';

@Module({
  imports: [
    PipelinesModule,
    LeadsModule,
    ActivitiesModule,
    CustomersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantContextMiddleware).forRoutes('*');
  }
}
