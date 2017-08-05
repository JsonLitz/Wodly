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
    e.preventDefault();
    console.log('Heres your stupid log', this.state.data);
    $.post( "/items", { text: this.state.text }, function( data ) {
    });
  }
  showEntries() {
    var that = this;
    $.get("/items", function( data ){
      that.setState({
        data: data
      });
    });
  }

  clickParagraph() {
  console.log('clicked!');
  }

  render() {
    return (
      <div>
        <form action="/items" method="post" >
          <input
            value={this.state.text}
            onChange={this.onChange.bind(this)}
          />
          <button
            onClick={this.addNew.bind(this)}
          >Add an entry!
          </button>
        </form>
        <h4> Journal Entries </h4>
        <button onClick={this.showEntries.bind(this)}>Render Entries</button>
        <h2>Entries</h2>
        <div>
          { this.state.data.map(data => <ListItem item={data}/>)}
        </div>
      </div>
    )
  }
}

export default List;
