import { DRIZZLE_CONFIG, IDrizzleConfig } from "./drezzle.config";
import { DynamicModule, Module } from "@nestjs/common";
import { EnvConfigModule } from "@/config/env.module";
import { DrizzleService } from "./drezzle.service";

@Module({
  imports: [ EnvConfigModule ]
})
export class DrizzleModule {
  static forRoot(options?:IDrizzleConfig): DynamicModule {
    return {
      module: DrizzleModule,
      providers: [
        { provide: DRIZZLE_CONFIG, useValue: options },
        DrizzleService
      ],
      exports: [ DrizzleService]
    }
  }
}
