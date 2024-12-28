import { ServiceBService } from './meditor-approach/service-b.service';
import { ServiceAService } from './meditor-approach/service-a.service';
import { MediatorService } from './meditor-approach/mediator.service';
import { SecondServiceService } from './circular-same-module/secondservice.service';
import { FirstServiceService } from './circular-same-module/firstservice.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './module-a/module-a.module';
import { ModuleB } from './module-b/module-b.module';
import { ModuleC } from './module-c/module-c.module';
import { CircularSameModuleModule } from './circular-same-module/circular-same-module.module';
import { MeditorApproachModule } from './meditor-approach/meditor-approach.module';

@Module({
  imports: [ModuleA, ModuleB, ModuleC, CircularSameModuleModule, MeditorApproachModule],
  controllers: [AppController],
  providers: [
    ServiceBService,
    ServiceAService,
    MediatorService,
    SecondServiceService,
    FirstServiceService, AppService],
})
export class AppModule { }
