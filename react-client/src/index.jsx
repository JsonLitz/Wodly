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
    	this.lgClose = this.lgClose.bind(this);
      this.lgOpen = this.lgOpen.bind(this);
      this.wodRandomizer = this.wodRandomizer.bind(this);
  }
 sanitizeReturnJson(json){
       var answer = json.map(obj => {
            delete obj["_id"]
            return obj
       })
       this.setState({items:answer})
       console.log("sanitizedJson",this.state.items, "vs  ", this.state.wods);
           this.wodRandomizer()
   }

  componentWillMount(){
      this.showEntries();
  }
  showEntries() {
    console.log("mounted",this.state.wods);

    fetch('/items')
        .then(response => response.json())
            .then(data => {
                this.sanitizeReturnJson(data)
            })
            {console.log(this.state.data, "index.jsx state")};

  }
  // showEntries() {
  //   fetch('/items')
  //       .then(response => response.json())
  //           .then(data => {
  //               this.setState({
  //                   data:data
  //               })
  //           })
  // }

  componentDidMount(){
      console.log("items=", this.state.wods, "wods = ",this.state.wods)
  }
  wodRandomizer ()  {
      console.log("wodRandomizer");
    var random  = this.state.items[Math.floor(Math.random()*this.state.items.length)];
    var randomInt = Math.floor(Math.random()*100000);
    this.setState({
      currentWod: random,
      randomID:randomInt
    });
    console.log(this.state.currentWod,"this.state.currentWod");
  }

  lgClose () {

    this.setState({ lgShow: false });
  }
  lgOpen () {
    this.setState({ lgShow: true });
    console.log("lgOpen", this.state.lgShow)
  }
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
          <NewEntryForm />
        </div>
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
