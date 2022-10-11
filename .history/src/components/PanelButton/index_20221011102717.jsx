import React from 'react';

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(2);

  const categories = ['Заявки', 'В работе', 'Завершенные'];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };
  return (
    <div className="panel__button">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
