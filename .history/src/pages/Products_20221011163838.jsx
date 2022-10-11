import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Products = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  //Загрузка один раз
  React.useEffect(() => {
    fetch(
      'https://script.google.com/macros/s/AKfycbweG0UN4InNAnEY5NbtOXIUdecjD_SoYmflH-MgXe1GofPzXPdRsa7x4A35hrKY7Q3jyA/exec',
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

  console.log(items);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все товары</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <ProductCard key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Products;
