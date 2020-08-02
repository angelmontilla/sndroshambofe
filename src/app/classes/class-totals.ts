/**
 * @description class for totals
 *
 * @export
 * @class ClassTotals
 */
export class ClassTotals {
    constructor(private irounds?: number,
                private ifirsts?: number,
                private isecond?: number,
                private idraws?: number) {
        if (irounds === undefined || irounds == null) {
            irounds = 0;
        }
        if (ifirsts === undefined || ifirsts == null) {
            ifirsts = 0;
        }
        if (isecond === undefined || isecond == null) {
            isecond = 0;
        }
        if (idraws === undefined || idraws == null) {
            idraws = 0;
        }
    }

    get rounds(): number {
        return this.irounds;
    }

    set rounds(round: number ) {
        this.irounds = round;
    }

    get firsts(): number {
        return this.ifirsts;
    }

    set firsts(firsts: number ) {
        this.ifirsts = firsts;
    }

    get seconds(): number {
        return this.isecond;
    }

    set seconds(seconds: number ) {
        this.isecond = seconds;
    }

    get draws(): number {
        return this.idraws;
    }

    set draws(draws: number ) {
        this.idraws = draws;
    }

}
