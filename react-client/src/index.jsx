import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
const divStyle = {
  // color: 'blue';
  textAlign: 'center' 
};
class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
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

        <List items={this.state.items}/>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
