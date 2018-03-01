// @flow
import React from 'react';
const divStyle = {
  textAlign: 'center'
};
function Movements (props) {
   return(
    <div style = {divStyle}>
      <h2> Your Daily Wod</h2>
      <Button bsStyle="primary" onClick = {this.wodRandomizer.bind(this)}>Pick another</Button>
      <h3> {this.state.currentWod.name}</h3>
      <h4>Details: {this.state.currentWod.details}</h4>
      Movements:{this.state.currentWod.movements.map(movement => <Movements key={this.state.randomID} movement = {movement}/>)}
    </div>
)
console.log("props", props)
}

export default Movements;
