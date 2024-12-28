import { forwardRef, Module } from '@nestjs/common';
import { FirstServiceService } from './firstservice.service';
import { SecondServiceService } from './secondservice.service';

@Module({
    providers: [
        FirstServiceService,
        {
            provide: SecondServiceService,
            useClass: SecondServiceService,
        }
    ],
    exports: [FirstServiceService, SecondServiceService],
})
export class CircularSameModuleModule { }
