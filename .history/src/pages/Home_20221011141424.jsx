import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home = () => {
  return (
    <div className="container">
      <div className="content__top"></div>
      <h2 className="content__title">Домашняя страница</h2>
      <div className="content__items"></div>
    </div>
  );
};

export default Home;
