import React from 'react';

const ListItem = (props) =>
  (
    <div>
      <p>Name: { props.item.name }*</p>
      <p>Details: { props.item.details }*</p>

    </div>
  )

export default ListItem;

//make new componenent
//this one is a functional
//it will receive props from Index.js
//
