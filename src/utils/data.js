import First from '../assets/img/dog/1small.png';
import Second from '../assets/img/dog/2middle.png';
import Third from '../assets/img/dog/3big.png';
import Fourth from '../assets/img/dog/4cat.png';

export default [
  {
    id: 1,
    image: First,
    name: 'Маленькі',
    category: '0-8 кг.',
    services: [
      {
        id: '1',
        name: 'Початковий',
        price: 20,
        info: [{ name: 'Послуга 1' }, { name: 'Послуга 1' }, { name: 'Послуга 1' }],
      },
      {
        id: '2',
        name: 'Середній',
        price: 20,
        info: [{ name: 'Послуга 2' }, { name: 'Послуга 2' }, { name: 'Послуга 2' }],
      },
      {
        id: '3',
        name: 'Преміум',
        price: 20,
        info: [{ name: 'Послуга 3' }, { name: 'Послуга 3' }, { name: 'Послуга 3' }],
      },
    ],
  },
  {
    id: 2,
    image: Second,
    name: 'Середні',
    category: '8-17 кг.',
    services: [
      {
        id: '1',
        name: 'Початковий',
        price: 30,
        info: [{ name: 'Послуга 4' }, { name: 'Послуга 5' }, { name: 'Послуга 6' }],
      },
      {
        id: '2',
        name: 'Середній',
        price: 30,
        info: [{ name: 'Послуга 5' }, { name: 'Послуга 5' }, { name: 'Послуга 5' }],
      },
      {
        id: '3',
        name: 'Преміум',
        price: 30,
        info: [{ name: 'Послуга 6' }, { name: 'Послуга 6' }, { name: 'Послуга 6' }],
      },
    ],
  },
  {
    id: 3,
    image: Third,
    name: 'Великі',
    category: '>17 кг.',
    services: [
      {
        id: '1',
        name: 'Початковий',
        price: 20,
        info: [{ name: 'Послуга 7' }, { name: 'Послуга 7' }, { name: 'Послуга 7' }],
      },
      {
        id: '2',
        name: 'Середній',
        price: 20,
        info: [{ name: 'Послуга 8' }, { name: 'Послуга 8' }, { name: 'Послуга 8' }],
      },
      {
        id: '3',
        name: 'Преміум',
        price: 20,
        info: [{ name: 'Послуга 9' }, { name: 'Послуга 9' }, { name: 'Послуга 9' }],
      },
    ],
  },
  {
    id: 4,
    image: Fourth,
    name: 'Інші тварини',
    category: 'Котики та інші тваринки',
    services: [
      {
        id: '1',
        name: 'Дружній',
        price: "Договірна",
        info: [ { name: 'Послуги визначаються за попередньою домовленістю.' },],
      },

    ],
  },
];
