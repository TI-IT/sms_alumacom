import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Offer from '../components/Offer';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Cart = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //Загрузка один раз
  React.useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbyexZ816wMSDWo2mSDVFHElgMU4WReI2XlwsA0q8kDD7-ocG4hqSJoxyeCO2Y2lKMp7jQ/exec',
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); // при первой загрузке скролит вверх
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <Offer key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Cart;
