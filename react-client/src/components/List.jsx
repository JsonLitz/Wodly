import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
console.log('hello from List.jsx');
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
    // this.setState({
    //   details: e.target.value
    // });
  }

  addNew(e) {
    var that = this;
    e.preventDefault();
    console.log('Heres your stupid log', that.state.details, that.state.name);
    $.post( "/items", { details: this.state.details, name:this.state.name }, function( data ) {
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

  render() {
    return (
      <div>
        <form action="/items">

          <div>
            <input
              name = 'details'
              type = 'text'
              placeholder = 'Enter details'
              value={this.state.details}
              onChange={this.onChange}
              required = 'required'
            />
          </div>

          <div>
            <input
              name = 'name'
              type = 'text'
              placeholder = 'Enter a name'
              value={this.state.name}
              onChange={this.onChange}
              required = 'required'
            />
          </div>

          <button
            onClick={this.addNew.bind(this)}
          >Add an entry!
          </button>

        </form>
        <h3> Wods</h3>
        <div>
          { this.state.data.map(data => <ListItem key={this.state.data.indexOf(data)}  item={data}/>)}
        </div>

      </div>
    )
  }
}

export default List;
















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
