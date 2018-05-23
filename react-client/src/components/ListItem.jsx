import React from 'react';
import { Panel } from 'react-bootstrap';
import styled from 'emotion'

const divStyle = {
  textAlign: 'center'
};


const ListItem = (props) =>

  (
    <div>
      <Panel >
        Name:<h3 style= {divStyle}>{props.item.name}</h3>
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
