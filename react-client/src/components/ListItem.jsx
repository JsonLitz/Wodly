import React from 'react';
import { Panel } from 'react-bootstrap';
import styled, { css } from 'react-emotion';


const divStyle = {
  textAlign: 'center'
};

class ListItem extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      details: this.props.item.details,
      name: this.props.item.name,
      movements: this.props.item.movements
    };
    this.deleteOne = this.deleteOne.bind(this);
  }
  deleteOne(){
      var postId = this.props.item._id
       fetch('/items', {
          method: 'delete',
          body: JSON.stringify({"_id":postId}),
          headers: { "Content-Type": "application/json" },
      }).then(response => response.json())
      .then(data => console.log("successfully deleted" ))
  }
  render() {
      return (
          <div>
          <Panel >
              <button onClick={this.deleteOne}></button>
              <h3 style= {divStyle}>Name:  {this.state.name}</h3>
              <p style= {divStyle}>Details:{this.state.details}</p>
              <p style= {divStyle}>Movements:{this.state.movements}</p>
          </Panel>
          </div>
      )
  }
}
export default ListItem;

//make new component
//this one is a functional
//it will receive props from Index.js
//
