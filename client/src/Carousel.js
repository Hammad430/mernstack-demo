import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './styles.css';
const items = [
  {
    src: require('./images/img2.jpg'),
    altText: 'Slide 1',
    caption: 'Check Rates',
    header: 'See daily and previous rates for all regions',
    key: '1'
  },
  {
    src: require('./images/img3.jpg'),
    altText: 'Slide 2',
    caption: 'Sell Flock',
    header: 'List your Flock to sell',
    key: '2'
  },
  {
    src: require('./images/img1.jpg'),
    altText: 'Slide 3',
    caption: 'Buy Flock',
    header: 'See information  for  ready flocks',
    key: '3'
  }
];

const Carousel = () => <UncontrolledCarousel  items={items} />;

export default Carousel;