import { Module, forwardRef } from '@nestjs/common';
import { ServiceB } from './service-b.service';
import { ModuleA } from '../module-a/module-a.module';

@Module({
    imports: [forwardRef(() => ModuleA)],
    // imports: [ModuleA],
    providers: [ServiceB],
    exports: [ServiceB],
})
export class ModuleB { }
