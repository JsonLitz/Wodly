import React from 'react';
import Movements from './Movements.jsx';
import wodData from '../data/Wods.js';
import {Button, Grid, Row, Form, FormGroup, FormControl, Col} from 'react-bootstrap';
// import shortid from 'shortid';

const divStyle = {
  textAlign: 'center'
};
class Wod extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWod: props.wod,
      randomID:12345
    };
  }
  wodRandomizer ()  {
    var random  = wodData[Math.floor(Math.random()*wodData.length)];
    var randomInt = Math.floor(Math.random()*100000);
    this.setState({
      currentWod: random,
      randomID:randomInt
    });
  }
  componentWillMount() {
    this.wodRandomizer()
  }

render () {
  return (
      <div style = {divStyle}>
        <h2 > Your Daily Wod</h2>
        <Button bsStyle="primary" onClick = {this.props.wodRandomizer}>Pick another</Button>
        <h3> {this.props.currentWod.name}</h3>
        <h4>Details: {this.props.currentWod.details}</h4>
        Movements:{this.props.currentWod.movements.map(movement => <Movements key={this.props.currentWod.movements.indexOf(movement)} movement = {movement}/>)}


      </div>
    )
  }
}
  export default Wod;
