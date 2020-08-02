import { Enummove } from '../enums/enummove.enum';
import { Enumresult } from '../enums/enumresult.enum';

/**
 * @description result representation
 *
 * @export
 * @class ClassResult
 */
export class ClassResult {

    /**
     * Creates an instance of ClassResult.
     * @param {string} Id
     * @param {Date} Date
     * @param {Enummove} FPlayer
     * @param {Enummove} SPlayer
     * @param {Enumresult} Result
     * @memberof ClassResult
     */
    constructor(private Id?: string,
                private Date?: Date,
                private FPlayer?: Enummove,
                private SPlayer?: Enummove,
                private Result?: Enumresult ) {}

    /**
     * Id
     *
     * @type {string}
     * @memberof ClassResult
     */
    get id(): string {
        return this.Id;
    }

    /**
     * set Id
     *
     * @memberof ClassResult
     */
    set id(i: string) {
        this.Id = i;
    }

    /**
     * set date
     *
     * @type {Date}
     * @memberof ClassResult
     */
    get date(): Date {
        return this.Date;
    }

    /**
     * get date
     *
     * @memberof ClassResult
     */
    set date(date: Date) {
        this.Date = date;
    }

    /**
     * get first player
     *
     * @type {Enummove}
     * @memberof ClassResult
     */
    get fplayer(): Enummove {
        return this.FPlayer;
    }

    /**
     * set first player
     *
     * @type {Enummove}
     * @memberof ClassResult
     */
    set fplayer(fplayer: Enummove) {
        this.FPlayer = fplayer;
    }

    /**
     * get second player
     *
     * @type {Enummove}
     * @memberof ClassResult
     */
    get splayer(): Enummove {
        return this.SPlayer;
    }

    /**
     * set second player
     *
     * @memberof ClassResult
     */
    set splayer(splayer: Enummove) {
        this.SPlayer = splayer;
    }

    /**
     * get result
     *
     * @type {Enumresult}
     * @memberof ClassResult
     */
    get result(): Enumresult {
        return this.Result;
    }

    /**
     * set result
     *
     * @memberof ClassResult
     */
    set result(result: Enumresult) {
        this.Result = result;
    }
}
