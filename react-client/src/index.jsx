import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Wod from './components/Wod.jsx';
import wodData from './data/Wods.js';

const divStyle = {
  textAlign: 'center'
};

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      items: [],
      wods: wodData
    };
  }

  componentDidMount() {
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
  }
  render () {
    return (
      <div style = {divStyle}>
        <h1>WODly</h1>

        <div>
          <List items = {this.state.items}/>
        </div>

        <div>
          {this.state.wods.map (wod => <Wod key={this.state.wods.indexOf(wod)}
          wod = {wod}/>)}
        </div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
