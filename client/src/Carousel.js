import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles.css';
const items = [
  {
    src: require('./images/img2.jpg'),
    altText: 'Slide 1',
    caption: 'See daily and previous rates for all regions',
    header: 'Check Rates',
    key: '1'
  },
  {
    src: require('./images/img3.jpg'),
    altText: 'Slide 2',
    caption: 'List your Flock to sell',
    header: 'Sell Flock',
    key: '2'
  },
  {
    src: require('./images/img1.jpg'),
    altText: 'Slide 3',
    caption: 'See information  for  ready flocks',
    header: 'Buy Flock',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel  items={items} />;

export default Carousel;