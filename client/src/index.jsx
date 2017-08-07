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
    console.log(this.state.wods);

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
      <div>
        <h1 style = {divStyle}>WODly</h1>
        <div>
          <Wod wod = {this.state.wods} />
        </div>

        <div >
          <List items = {this.state.items}/>
        </div>


      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
