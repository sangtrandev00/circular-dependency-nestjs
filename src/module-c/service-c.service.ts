import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceC {
    constructor() { }

    getMessage(): string {
        return `Hello from ServiceC. Called by: `;
    }
}
