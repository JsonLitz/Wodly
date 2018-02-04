import {Button, Grid, Row, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
import React from 'react';
import Movements from './Movements.jsx';
import wodData from '../data/Wods.js';
const divStyle = {
  textAlign: 'center'
};
class Wod extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWod: wodData[0]
    };
  }

  wodRandomizer ()  {
    var random  = wodData[Math.floor(Math.random()*wodData.length)];
    this.setState({
      currentWod: random
    });
    console.log(random);
  }

render () {
  return (
      <div style = {divStyle}>
        <h2 > Your Daily Wod</h2>
        <Button bsStyle="primary" onClick = {this.wodRandomizer.bind(this)}>Pick another</Button>
        <h3> {this.state.currentWod.name}</h3>

        <h4>Details: {this.state.currentWod.details}</h4>

        Movements:{this.state.currentWod.movements.map(movement => <Movements key = {this.state.currentWod.movements.indexOf(movement)} movement = {movement}/>)}


      </div>
    )
  }
}
  export default Wod;
