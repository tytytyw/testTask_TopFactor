export const data = [
    {
        id: 0,
        date: { month: 'Апрель', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 102.5 },
            { title: 'Премия', name: 'bonus', baseRate: 50000 }
        ],
        workHours: { plan: 176, fact: 170 }
    },
    {
        id: 1,
        date: { month: 'Май', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 100 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 178, fact: 135 }
    },
    {
        id: 2,
        date: { month: 'Июнь', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 98 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 176, fact: 176 }
    },
    {
        id: 3,
        date: { month: 'Июль', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 80 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 178, fact: 76 }
    },
    {
        id: 4,
        date: { month: 'Август', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 100.5 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 176, fact: 182 }
    },
    {
        id: 5,
        date: { month: 'Сентябрь', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 110 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 170, fact: 166 }
    },
    {
        id: 6,
        date: { month: 'Октябрь', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 105 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 176, fact: 176 }
    },
    {
        id: 7,
        date: { month: 'Ноябрь', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 99.8 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 176, fact: 176 }
    },
    {
        id: 8,
        date: { month: 'Декабрь', year: 2021 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 100.5 },
            { title: 'Премия', name: 'bonus', baseRate: 51000 }
        ],
        workHours: { plan: 178, fact: 178 }
    },
    {
        id: 9,
        date: { month: 'Январь', year: 2022 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 98.5 },
            { title: 'Премия', name: 'bonus', baseRate: 55000 }
        ],
        workHours: { plan: 176, fact: 176 }
    },
    {
        id: 10,
        date: { month: 'Февраль', year: 2022 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 100.5 },
            { title: 'Премия', name: 'bonus', baseRate: 55000 }
        ],
        workHours: { plan: 166, fact: 170 }
    },
    {
        id: 11,
        date: { month: 'Март', year: 2022 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 100.5 },
            { title: 'Премия', name: 'bonus', baseRate: 55000 }
        ],
        workHours: { plan: 180, fact: 151 }
    },
    {
        id: 12,
        date: { month: 'Апрель', year: 2022 },
        performanceValues: [
            { title: 'Норматив', name: 'norm', value: 100 },
            { title: 'Результат', name: 'result', value: 102.5 },
            { title: 'Премия', name: 'bonus', baseRate: 55000 }
        ],
        workHours: { plan: 176, fact: 100 }
    },
]

export const menuItems = {
    menu: [
        { text: 'Меню один', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Меню два', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Меню три', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Меню четыре', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Меню пять', callback: (e) => { console.log(`клик на ${e}`) } },
    ],
    person: [
        { text: 'Персонализация один', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Персонализация два', callback: (e) => { console.log(`клик на ${e}`) } },
        { text: 'Персонализация три', callback: (e) => { console.log(`клик на ${e}`) } },
    ],
}