import { Module, forwardRef } from '@nestjs/common';
import { ServiceA } from './service-a.service';
import { ModuleB } from '../module-b/module-b.module';
import { ControllerA } from './controller-a.controller';

@Module({
    // imports: [forwardRef(() => ModuleB)],
    imports: [forwardRef(() => ModuleB)],
    controllers: [ControllerA],
    providers: [ServiceA],
    exports: [ServiceA],
})
export class ModuleA { }
