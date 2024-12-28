import { Controller, Get } from "@nestjs/common";
import { ServiceA } from "src/module-a/service-a.service";


@Controller('controller-c')
export class ControllerC {
    constructor(private readonly serviceA: ServiceA) { }

    @Get('get-message')
    getMessage(): string {
        return this.serviceA.getMessageFromB()
    }

}