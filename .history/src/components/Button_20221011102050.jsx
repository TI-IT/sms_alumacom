import React from 'react';

function Button({ props }) {
  return (
    <div className="categories">
      <button onClick={props.click || ''}>{props.name}</button>
    </div>
  );
}
export default Button;
