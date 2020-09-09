import { format } from "date-fns"
import intervalToDuration from 'date-fns/intervalToDuration'

export function formatEventDate(date: Date) {
    return format(date, "EEEE do MMMM");
}

export function formatEventHours(start: Date, end: Date) {
    return `from ${format(start, "HH:mm")} to ${format(end, "HH:mm")}`;
}

export function formatDurationInMinutes(start: Date, end: Date) {
    const duration = intervalToDuration({
        start,
        end
    })

    let minutes = duration.minutes || 0;

    minutes += duration.days ? duration.days * 24 * 60 : 0;
    minutes += duration.hours ? duration.hours * 60 : 0;
    minutes += duration.seconds ? duration.seconds / 60 : 0;

    return minutes;
}

export type DayPeriod = "morning" | "afternoon" | "evening" | "night";

export function timeIs(startDate: Date, endDate: Date, name: DayPeriod) {
    const dayTimeLimits = {
        'morning': (start: Date, end: Date) => timeOverLaps(start, end, 6, 12),
        'afternoon': (start: Date, end: Date) => timeOverLaps(start, end, 12, 17),
        'evening': (start: Date, end: Date) => timeOverLaps(start, end, 17, 21),
        'night': (start: Date, end: Date) => timeOverLaps(start, end, 21, 24) || timeOverLaps(start, end, 0, 6)
    }

    return dayTimeLimits[name](startDate, endDate);
}

function timeOverLaps(startTime1: Date, endTime1: Date, startTime2: number, endTime2: number) {
    let startTime1Minutes = (startTime1.getHours() * 60) + startTime1.getMinutes();
    let endTime1Minutes = (endTime1.getHours() * 60) + startTime1.getMinutes();
    let startTime2Minutes = startTime2 * 60;
    let endTime2Minutes = (endTime2 * 60) - 1;

    if(endTime1Minutes === 0) {
        endTime1Minutes = 24*60;
    } 

    return (startTime1Minutes <= endTime2Minutes) && (startTime2Minutes <= endTime1Minutes);
}