import { format } from "date-fns"

export function formatEventDate(date: Date) {
    return format(date, "EEEE do MMMM yyyy");
}