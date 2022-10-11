import React from 'react';

function Offer({
  id_product,
  id_categori,
  finishing,
  id_suppliers,
  vendor_code,
  name_product,
  unit,
  price,
  image_url,
}) {
  const [activeType, setActivType] = React.useState(0);
  const [activeSize, setActivSize] = React.useState(0);
  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <h5 className="pizza-block__title">{name_product}</h5>
        <img width="100" className="pizza-block__image" src={image_url} alt="product" />

        <div className="pizza-block__selector"></div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button className="button button--outline button--add">
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
