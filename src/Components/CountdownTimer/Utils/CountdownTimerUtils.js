

export function getRemainingTimeUntilMsTimestamp(timestampS) {
    if(timestampS <= 0) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00'
        }
    }
    return {
        seconds : getRemainingSeconds(timestampS),
        minutes : getRemainingMinutes(timestampS),
        hours : getRemainingHours(timestampS)
    } ;
}

function getRemainingSeconds(timestampS) {
    const seconds = timestampS % 60;
    return padWithZeros(seconds, 2);
}

function getRemainingMinutes(timestampS) {
    const minutes = Math.floor(timestampS/60) % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(timestampS) {
    const hours = Math.floor(timestampS / 3600);
    return padWithZeros(hours, 2);
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) +  numberString;
}