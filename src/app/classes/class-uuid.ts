import { noUndefined } from '@angular/compiler/src/util';

export class ClassUuid {
    constructor(private Id?: string) {
        if (Id === undefined || Id == null ) {
            this.Id = this.generateUUID();
        }
    }

    get UUID(): string {
        return this.Id;
    }

    set UUID(uuid: string) {
        this.Id = uuid;
    }

    private generateUUID() {
        let dt = new Date().getTime();
        const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random() * 16 ) % 16;
            r = r | 0;

            dt = Math.floor(dt / 16);
            return (c === 'x' ? r : ( r&0x3 | 0x8) ).toString(16);
        });

        return uuid;
    }
}
