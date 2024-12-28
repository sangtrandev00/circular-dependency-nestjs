/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { MediatorService } from './mediator.service';

@Injectable()
export class ServiceAService {
    constructor(private readonly mediatorService: MediatorService) { }

    getMessageFromMediator(): string {
        return this.mediatorService.getSharedMessage();
    }

}
