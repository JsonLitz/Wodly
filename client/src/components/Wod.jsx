import React from 'react';
import Movements from './Movements.jsx';
import wodData from '../data/Wods.js';

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
      <div>
        <h3> Your Daily Wod</h3>
        <button onClick = {this.wodRandomizer.bind(this)}>randomize</button>
        <div>Name: {this.state.currentWod.name}</div>

        <div>Details: {this.state.currentWod.details}</div>

        Movements:{this.state.currentWod.movements.map(movement => <Movements key = {this.state.currentWod.movements.indexOf(movement)} movement = {movement}/>)}


      </div>
    )
  }
}
  export default Wod;
