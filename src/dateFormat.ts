import {lightFormat} from "date-fns";

export function dateFormat(dateString) {
    if (typeof dateString !== 'string') {
        return lightFormat(dateString, 'yyyy-MM-dd H:mm:s');
    }

    const dateArray = dateString.split(/[\/,:\s]+/);
    return `${dateArray[2]}-${dateArray[1].padStart(2, '0')}-${dateArray[0].padStart(2, '0')} ${dateArray[3]}:${dateArray[4]}:${dateArray[5]}`;
}