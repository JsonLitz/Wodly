import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
console.log('hello from List.jsx');
class List extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      text: '',
      data:[]
    };
  }
  onChange (e) {
    this.setState({
      text: e.target.value
    });
  }
  addNew(e) {
    var ok = this;
    e.preventDefault();
    console.log('Heres your stupid log', ok.state.text);
    $.post( "/items", { text: this.state.text }, function( data ) {
    });
    this.showEntries();
  }
  showEntries() {
    var that = this;
    $.get("/items", function( data ){
      that.setState({
        data: data
      });
    });
  }
  //TODO: add delete entry function
  // clearEntries() {
  //   $.ajax({
  //     url: '/items',
  //     type: 'DELETE',
  //     success: function(result) {
  //       console.log(result);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <form action="/items">
          <input
            value={this.state.text}
            onChange={this.onChange.bind(this)}
          />
          <button
            onClick={this.addNew.bind(this)}
          >Add an entry!
          </button>
        </form>
        <h3> Movement Entries </h3>
        <button onClick={this.showEntries.bind(this)}>Render Entries</button>
        <h4>Exercises</h4>
        <div>
          { this.state.data.map(data => <ListItem  item={data}/>)}
        </div>
      </div>
    )
  }
}

export default List;
