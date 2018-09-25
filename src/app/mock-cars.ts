import { Car } from './car';

export const CARS: Car[] = [
    {
        id: 1,
        name: '2013 Audi A8',
        img: '../assets/images/a8d4.jpg',
        miles: 75000,
        oil: '0W-40',
        engine: '3.0L V6T',
        tires: 'F 20x9.0 | R 20x9.0'
    },
    {
        id: 2,
        name: '2009 Nissan 370z',
        img: '../assets/images/z34.jpg',
        miles: 105000,
        oil: '5W-30',
        engine: '3.7L V6',
        tires: 'F 19x9.5 | R 19x10.5'
    },
    {
        id: 3,
        name: '1991 Nissan 300ZX',
        img: '../assets/images/z32.jpg',
        miles: 120000,
        oil: '5W-30',
        engine: '3.0L V6',
        tires: 'F 18x8 | R 18x9.5'
    }
];