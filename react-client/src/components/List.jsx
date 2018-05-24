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
  }

  componentWillMount() {
    this.showEntries();
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });

  }
  clearForms() {
      this.setState({
          details: '',
          name:'',
          movements:'',
      })
      console.log(this.state);
  }

  addNew(e) {
    var that = this;
    var postData = {
        details: this.state.details,
        name:this.state.name,
        movements:this.state.movements,
    }
    fetch('/items', {
            method: 'POST',
            body:JSON.stringify({postData})
        }).then((res) => res.json())
        .then((data) =>  console.log(data))
        .catch((err)=>console.log(err))
        this.clearForms()
    }
  showEntries() {
    fetch('/items')
        .then(response => response.json())
            .then(data => {
                this.setState({
                    data:data
                })
                {console.log(this.state.data, "state")};
            })
  }

  render() {

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
          {this.state.data.map((data,i) => <ListItem key={i}  item={data}/>)}
        </div>

      </div>
    )
  }
}

export default List;
