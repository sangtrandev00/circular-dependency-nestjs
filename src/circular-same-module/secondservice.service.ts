/*
https://docs.nestjs.com/providers#services
*/

import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { FirstServiceService } from './firstservice.service';

@Injectable()
export class SecondServiceService {
    // constructor(@Inject(forwardRef(() => FirstServiceService)) private readonly firstService: FirstServiceService) { }
    constructor(private readonly firstService: FirstServiceService) { }

    getMessage(): string {
        return `Hello wrold Second service`
    }

}
