import React from 'react';

const ListItem = (props) =>
  (
    <div>
      <p>*{ props.item.text }*</p>
      <button>delete</button>

    </div>
  )

export default ListItem;
