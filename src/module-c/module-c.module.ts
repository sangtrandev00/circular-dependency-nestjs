import { Module, forwardRef } from '@nestjs/common';
import { ServiceC } from './service-c.service';
import { ModuleA } from 'src/module-a/module-a.module';
import { ControllerC } from './controller-c.controller';

@Module({
    imports: [ModuleA],
    controllers: [ControllerC],
    providers: [ServiceC],
    exports: [ServiceC],
})
export class ModuleC { }
