import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {
  const [activeIndex, setActivIndex] = React.useState(0);

  const categories = [
    {
      id: 0,
      name: 'Заявки',
      path: '/proposal',
    },
    {
      id: 1,
      name: 'В работе',
      path: '/inwork',
    },
    {
      id: 2,
      name: 'Завершенные',
      path: '/completed',
    },
    {
      id: 2,
      name: 'Завершенные',
      path: '/completed',
    },
  ];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((obj) => (
          <Link to={obj.path}>
            <li
              key={obj.id}
              onClick={() => onClickCategory(obj.id)}
              className={activeIndex === obj.id ? 'active' : ''}>
              {obj.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
