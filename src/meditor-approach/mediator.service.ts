/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class MediatorService {

    getSharedMessage(): string {
        return 'Shared Message';
    }
}
