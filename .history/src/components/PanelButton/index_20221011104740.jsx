import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(2);

  const categories = [
    {
      id: 0,
      name: 'Заявки',
      path: 'offer',
    },
    {
      id: 1,
      name: 'В работе',
      path: '/',
    },
    {
      id: 2,
      name: 'Завершенные',
      path: '/',
    },
  ];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <Link to={value.работе}>
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
