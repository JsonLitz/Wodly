import React from 'react';
import {Panel} from 'react-bootstrap';

const divStyle = {
  textAlign: 'center'
};
const ListItem = (props) =>
  (
    <div>
      <Panel >
        <p style= {divStyle}>Name:{props.item.name}</p>
        <p style= {divStyle}>Details:{props.item.details}</p>
        <p style= {divStyle}>Movements:{props.item.movements}</p>
      </Panel>
    </div>
  )
export default ListItem;

//make new component
//this one is a functional
//it will receive props from Index.js
//
