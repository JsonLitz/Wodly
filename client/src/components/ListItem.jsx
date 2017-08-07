import React from 'react';
const divStyle = {
  textAlign: 'center'
};
const ListItem = (props) =>

  (
    <div>
      <p style = {divStyle}>Name: { props.item.name }*</p>
      <p style = {divStyle}>Details: { props.item.details }*</p>

    </div>
  )

export default ListItem;

//make new componenent
//this one is a functional
//it will receive props from Index.js
//
