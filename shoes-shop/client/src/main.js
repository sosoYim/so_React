const { React, ReactDOM } = window;
import { Header, CardLinks } from './components/index.js';

const cards = [
  {
    id: 1,
    headline: '랄켈라 베이직 부츠',
    description: 'FW시즌 필수 아이템! 착-붙는 핏의 부츠를 만나보세요',
    src: './assets/images/shoes-1.jpg',
    label: '랄켈라 베이직 부츠',
    link: '#',
  },
  {
    id: 2,
    headline: '폭닥폭닥 스니커즈',
    description: '따뜻하면서 예쁜 다리라인을 원한다면 폭닥폭닥 키높이 스니커즈',
    src: './assets/images/shoes-2.jpg',
    label: '폭닥폭닥 스니커즈',
    link: '#',
  },
  {
    id: 3,
    headline: '또각또각 핑크 부츠',
    description: '똑 떨어지는 핏감과 핑크의 만남! 단풍 나들이에 딱이에요',
    src: './assets/images/shoes-3.jpg',
    label: '또각또각 핑크 부츠',
    link: '#',
  },
];

// const getFragment = reactElements => {
//   return <>{reactElements}</>;
// };

ReactDOM.render(
  <>
    <Header />, {CardLinks(cards)}
  </>,
  document.getElementById('root')
);
