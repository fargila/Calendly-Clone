export const DAYS_OF_WEEK_IN_ORDER = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
] as const

export const PrivateNavLinks = [
    {
        imgUrl: '/assest/events.svg',
        route: '/events',
        label: 'My Events'
    },
    {
        imgUrl: '/assest/schedule.svg',
        route: '/schedule',
        label: 'My Schedules'
    },
    {
        imgUrl: '/assest/public.svg',
        route: '/book',
        label: 'Public Profile'
    },
    
] as const