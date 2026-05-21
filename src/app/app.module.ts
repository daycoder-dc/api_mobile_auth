import { LoggerConfigModule } from '@/config/logger.module';
import { DrizzleModule } from '@/config/db/drezzle.module';
import { EnvConfigModule } from '@/config/env.module';
import { Module } from '@nestjs/common';
import * as schema from '@/schemas';

@Module({
  imports: [
    DrizzleModule.forRoot({ params: { schema } }),
    LoggerConfigModule,
    EnvConfigModule,
  ],
})
export class AppModule {}
