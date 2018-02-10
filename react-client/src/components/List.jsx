import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const divStyle = {
  textAlign: 'center'
};
class List extends React.Component {
  constructor (props){
    super (props);
    this.state = {
      details: '',
      name:'',
      movements:'',
      data:[]
    };
    this.onChange = this.onChange.bind(this);
    this.randomNumberGen = this.randomNumberGen.bind(this);
  }

  componentDidMount() {
    this.showEntries();
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
      $.post( "/items", { details: this.state.details, name:this.state.name, movements:this.state.movements  }, function( data ) {
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
  randomNumberGen() {
    let index=Math.floor(Math.random() * 1000);
  }
  render() {
    // console.log("mounted",this.state.data);

    return (
      <div >
        <form action="/items">
          <div style = {divStyle}>
            <input
              name='name'
              type='text'
              placeholder='Enter a name'
              value={this.state.name}
              onChange={this.onChange}
              required='required'
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
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel></ControlLabel>
              <FormControl
                name = 'movements'
                type = 'text'
                componentClass="textarea"
                placeholder="Enter movements"
                onChange={this.onChange}
                value={this.state.movements}
                />
            </FormGroup>
          </div>
          <div style = {divStyle}>
            <Button
              onClick={this.addNew.bind(this)}
              >Add an entry!
            </Button>
          </div>
        </form>
        <div>
          {this.state.data.map(data => <ListItem key={data.details}  item={data}/>)}
        </div>
      </div>
    )
  }
}

export default List;
