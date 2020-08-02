/**
 * @description class for totals
 *
 * @export
 * @class ClassTotals
 */
export class ClassTotals {
    constructor(public totalRounds?: number,
                public totalFirstWin?: number,
                public totalSecondWin?: number,
                public totalDraws?: number) {
        if (totalRounds === undefined || totalRounds == null) {
            totalRounds = 0;
        }
        if (totalFirstWin === undefined || totalFirstWin == null) {
            totalFirstWin = 0;
        }
        if (totalSecondWin === undefined || totalSecondWin == null) {
            totalSecondWin = 0;
        }
        if (totalDraws === undefined || totalDraws == null) {
            totalDraws = 0;
        }
    }

}
