import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ServiceB } from '../module-b/service-b.service';

@Injectable()
export class ServiceA {
    constructor(@Inject(forwardRef(() => ServiceB)) private readonly serviceB: ServiceB) { }

    getMessageFromB(): string {
        console.log("log");
        return this.serviceB.getMessage(); // Cause circular dependency
        // return `Message from B`; // solved DI
    }
}
