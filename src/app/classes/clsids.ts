/**
 * @description Preserve User identification
 *
 * @export
 * @class Clsids
 */
export class Clsids {

    constructor(public id?: string) {
        if (id === undefined) {
            this.id = '';
        }
    }


}
