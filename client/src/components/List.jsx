import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import Button from 'react-bootstrap/lib/Button';
const buttonsInstance = (
  <Button bsStyle="primary">Primary</Button>
);
const divStyle = {
  textAlign: 'center'
};
class List extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      details: '',
      name:'',
      data:[]
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNew(e) {
    var that = this;
    e.preventDefault();
    if (this.state.details.length !== 0 && this.state.name.length !== 0){
      $.post( "/items", { details: this.state.details, name:this.state.name }, function( data ) {
      });
    }else{
      window.alert('Please fill out all fields');
    }
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

  render() {
    return (
      <div >
        <form action="/items">
          <div style = {divStyle}>
            <input
              name = 'name'
              type = 'text'
              placeholder = 'Enter a name'
              value={this.state.name}
              onChange={this.onChange}
              required = 'required'
              />
          </div>

          <div style = {divStyle}>
            <input
              name = 'details'
              type = 'text'
              placeholder = 'Enter details'
              value={this.state.details}
              onChange={this.onChange}
              required = 'required'
            />
          </div>


          <div style = {divStyle}>
            <button
              onClick={this.addNew.bind(this)}
              >Add an entry!
            </button>
          </div>
        </form>

        <div>
          { this.state.data.map(data => <ListItem key={this.state.data.indexOf(data)}  item={data}/>)}
        </div>

      </div>
    )
  }
}

export default List;
