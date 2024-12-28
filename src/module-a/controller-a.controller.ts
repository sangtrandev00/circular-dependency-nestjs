import { Controller, Get } from "@nestjs/common";
import { ServiceA } from "./service-a.service";


@Controller('controller-a')
export class ControllerA {
    constructor(private readonly serviceA: ServiceA) { }

    @Get('get-message-from-b')
    getMessageFromB(): string {
        return this.serviceA.getMessageFromB();
    }

}