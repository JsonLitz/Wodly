import React from 'react';

const ListItem = (props) =>
  (
    <div>
      <p>*{ props.item.text }*</p>
      <button>delete</button>

    </div>
  )

export default ListItem;

//make new componenent
//this one is a functional
//it will receive props from Index.js
//
