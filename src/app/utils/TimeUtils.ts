/**
 * @summary Returns time string as 00:00 format.
 * @param minutes Minutes in number format
 */
export function getTimeFromMinutes(minutes: number): string {
    const gosterim = (deger) => {
        return (deger < 10 ? '0' : '') + deger;
    };

    return gosterim(Math.floor(minutes / 60)) + ':' + gosterim(minutes % 60);
}
/**
 * @summary Returns minute value of string time.
 * @param time string format time like "00:00"
 */
export function getMinutesFromTime(time: string): number {
    const arr = time.split(':', 2)
    return parseInt(arr[0]) * 60 + parseInt(arr[1]);
}
/**
 * @summary Returns "yyyy-mm-dd" format of today in ISO format.
 */
export function getTodayDateISO(): string {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    return year + '-'
        + (month < 10 ? "0" + month : month) + '-'
        + (dt < 10 ? "0" + dt : dt);
}
/**
 * @summary Returns "yyyy-mm-dd" format of first day current month in ISO format.
 */
export function getThisMonthDateISO(): string {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();
    return year + '-'
        + (month < 10 ? "0" + month : month) + '-'
        + (dt < 10 ? "0" + dt : dt);
}