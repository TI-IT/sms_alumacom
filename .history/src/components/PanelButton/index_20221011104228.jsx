import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(2);

  const categories = [{'Заявки': 'offer'}, {'работе': ''}, {'Завершенные': ''}];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <Link to={}>
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={activeIndex === i ? 'active' : ''}>
            {value}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
