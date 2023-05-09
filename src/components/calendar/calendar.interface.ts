
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
    daysOfMonth: Date[]
    imagesByDate: {
        [key: string]: IAxiosCalendar;
    }
    handleImageClick: (image: IAxiosCalendar, day: Date) => void
    setIsOpenModal: () => { payload: boolean; type: 'dashboard/setIsOpenModal'; }
    isOpenModal: boolean
}
