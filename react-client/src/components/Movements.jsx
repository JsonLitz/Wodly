import React from 'react';
const divStyle = {
  textAlign: 'center'
};
function Movements (props) {
   return(
    <div style = {divStyle}>
      <ul>
        <li style = {divStyle}>{props.movement}</li>
      </ul>
    </div>
)
console.log("props", props)
}

export default Movements;
