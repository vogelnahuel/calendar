
export interface IAxiosCalendar {
    copyright:string
    date:string
    explanation:string
    hdurl:string
    image:string
    title:string
    url:string
}
export interface ICalendar {
    images: IAxiosCalendar[]
    generateCalendarDays: () => number[]
}
