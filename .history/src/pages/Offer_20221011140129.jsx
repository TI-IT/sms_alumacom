import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import OfferContent from '../components/OfferContent';
import Skeleton from '../components/PizzaBlock/Skeleton';
// import products from '../assets/db/product.json';

const Offer = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //Загрузка один раз
  React.useEffect(() => {
    fetch('https://63427733ba4478d4783c44ef.mockapi.io/product')
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
      <h2 className="content__title">Коммерческое предложение</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <OfferContent key={obj.id} />)}
      </div>
    </div>
  );
};

export default Offer;
