import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Offer from '../components/Offer';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { products } from '../assets/db/product.json';

const Cart = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {products.map((obj) => (
          <Offer key={obj.id_product} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
