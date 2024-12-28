/*
https://docs.nestjs.com/providers#services
*/

import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { SecondServiceService } from './secondservice.service';

@Injectable()
export class FirstServiceService {
    constructor(@Inject(forwardRef(() => SecondServiceService)) private readonly secondService: SecondServiceService) { }

    getMessageFromSecond(): string {
        return this.secondService.getMessage();
    }
}
