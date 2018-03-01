import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Wod from './components/Wod.jsx';
import NewEntryForm from './components/NewEntryForm.jsx'
import wodData from './data/Wods.js';
import {Jumbotron, Button} from 'react-bootstrap';
const divStyle = {
  textAlign: 'center'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      wods: wodData,
      lgShow: false,
      currentWod: "",
      randomID:""
    };
    	this.hideModal = this.hideModal.bind(this);
      this.lgOpen = this.lgOpen.bind(this);
      this.wodRandomizer = this.wodRandomizer.bind(this);
  }

  componentWillMount() {
    console.log("mounted",this.state.wods);

    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
    this.wodRandomizer()

  }

  wodRandomizer ()  {
    var random  = wodData[Math.floor(Math.random()*wodData.length)];
    var randomInt = Math.floor(Math.random()*100000);
    this.setState({
      currentWod: random,
      randomID:randomInt
    });
    console.log(this.state.randomID);
  }


  lgOpen () {
    this.setState({ lgShow: true });
    console.log("lgOpen", this.state.lgShow)
  }

  hideModal(e){
    this.setState({
      lgShow: false
    });
  }
  //
  // showModal(e){
  //   // e.preventDefault();
  //   this.setState({
  //     lgShow: true
  //   });
  // }
  //
  render () {
    return (
      <Jumbotron>
        <div>
          <h1 style = {divStyle}>WODly</h1>
          <div>
            <Wod
              currentWod={this.state.currentWod}
              wodRandomizer={this.wodRandomizer}
              randomID={this.state.randomInt}
              />
          </div>
          <div>
            <List items = {this.state.items}/>
          </div>
        </div>
        <NewEntryForm
          lgShow={this.state.lgShow}
          hideModal={this.hideModal}
          />
        <Button
          bsStyle="primary"
          onClick={this.lgOpen}
          >
          Add New
        </Button>
      </Jumbotron>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
