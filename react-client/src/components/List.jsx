import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor (props){
    super (props);
    this.state = {

    };
  }

render() {
  return (
    <div>
      <form>
        <textarea cols="50" rows="4" name="description"></textarea>
        <button type="submit">Submit</button>
      </form>
      <h4> Journal Entries </h4>
      <h2>Entries</h2> { this.props.items.length }
        { this.props.items.map(item => <ListItem item={item}/>)}
    </div>
    )
  }
}

export default List;



// const List = (props) => (
// //   <div>
// //       <form>
// //         <textarea cols="50" rows="4" name="comment"></textarea>
// //         <button type="submit">Submit</button>
// //       </form>
// //       <h4> Journal Entries </h4>
// //       <h2>Entries</h2> { props.items.length }
// //     { props.items.map(item => <ListItem item={item}/>)}
// //   </div>
// // )
// //
// // export default List;
//
// import React from 'react';
// import ListItem from './ListItem.jsx';
