import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ServiceA } from '../module-a/service-a.service';

@Injectable()
export class ServiceB {
    constructor(@Inject(forwardRef(() => ServiceA)) private readonly serviceA: ServiceA) { }

    getMessage(): string {
        // return `Hello from ServiceB. Called by: ${this.serviceA.getMessageFromB()}`; // Cause Circular DI
        return `Hello world from service B`; // Solve circular
    }
}
