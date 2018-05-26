import React from 'react';
import ListItem from './ListItem.jsx';
import $ from 'jquery';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styled, { css } from 'react-emotion';


const divStyle = {
  textAlign: 'center'
};
const Movements = styled('div')`
    label {
        margin: 5% 20%;
        textAlign: 'center';
    }
`


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

  async addNew(e) {
    var that = this;
    var postData = {
        details: this.state.details,
        name:this.state.name,
        movements:this.state.movements,
    }
    console.log('this is your add new function data', postData );
        fetch('/items', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        this.clearForms();
    }
  showEntries() {
    fetch('/items')
        .then(response => response.json())
            .then(data => {
                this.setState({
                    data:data
                })
            })
  }



  render() {

    return (
      <div >
        <form action="/items">
          <div style = {divStyle}>
          <label>
            Name:
            <input
              name='name'
              type='text'
              placeholder='Enter a name'
              value={this.state.name}
              onChange={this.onChange}
              required='required'
              />
              </label>
          </div>
          <div style = {divStyle}>
              <label>
              details:
                    <input
                      name = 'details'
                      type = 'text'
                      placeholder = 'Enter details'
                      value={this.state.details}
                      onChange={this.onChange}
                      required = 'required'
                    />
                </label>

            <FormGroup controlId="formControlsTextarea">
            <Movements>
                <label>
                    movements:
                    <input
                        name = 'movements'
                        type = 'text'
                        placeholder="Enter movements"
                        onChange={this.onChange}
                        value={this.state.movements}
                        />
                </label>
                </Movements>
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
