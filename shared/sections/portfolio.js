const { img1, img2, img3, img4, img5 } = require('../assets/GymApp');
const { p1_1, p1_2, p1_3, p1_4 } = require('../assets/Portfolio_v1');
const { p2_1, p2_2, p2_3, p2_4 } = require('../assets/Portfolio_v2');
const { jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18 } = require('../assets/JustTravel18');
const { jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10 } = require('../assets/JustTravel10');
const { mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19 } = require('../assets/MovieReviewer19');
const { mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10 } = require('../assets/MovieReviewer10');

export const projects = [
  {
    title: 'Portfolio v1',
    subtitle: 'Strona portfolio typu Single Page Application',
    technology: 'React + JavaScript',
    images: [p1_1, p1_2, p1_3, p1_4],
    desktop: false,
    link: 'https://match00.github.io/Portfolio/v1/'
  },
  {
    title: 'Portfolio v2',
    subtitle: 'Strona portfolio typu Single Page Application',
    technology: 'React + TypeScript',
    images: [p2_1, p2_2, p2_3, p2_4],
    desktop: false,
    link: 'https://match00.github.io/Portfolio/v2/'
  },
  {
    title: 'JustTravel',
    subtitle: 'Aplikacja do tworzenia podrózy',
    technology: 'Angular 18 + TypeScript',
    images: [jt1_18, jt2_18, jt3_18, jt4_18, jt5_18, jt6_18, jt7_18],
    desktop: true
  },
  {
    title: 'JustTravel',
    subtitle: 'Aplikacja do tworzenia podrózy',
    technology: 'Angular 10 + TypeScript',
    images: [jt1_10, jt2_10, jt3_10, jt4_10, jt5_10, jt6_10, jt7_10],
    desktop: true
  },
  {
    title: 'MovieReviewer',
    subtitle: 'Aplikacja do oceniania filmów i seriali',
    technology: 'Angular 19 + TypeScript',
    images: [mr1_19, mr2_19, mr3_19, mr4_19, mr5_19, mr6_19],
    desktop: true
  },
  {
    title: 'MovieReviewer',
    subtitle: 'Aplikacja do oceniania filmów i seriali',
    technology: 'Angular 10 + TypeScript',
    images: [mr1_10, mr2_10, mr3_10, mr4_10, mr5_10, mr6_10],
    desktop: true
  },
  {
    title: 'GymApp',
    subtitle: 'Aplikacja mobilna do zarządzania oraz monitorowania treningów',
    technology: 'React Native + TypeScript',
    images: [img1, img2, img3, img4, img5],
    desktop: false
  },
]