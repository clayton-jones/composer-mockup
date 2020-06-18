import React from 'react';


import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: false,
    }
  }

  updateState(key, val) {
    this.setState({...this.state, [key]: val});
  }

  render() {
    return (
      <div className="App">
        <Header updateState={this.updateState.bind(this)} menuVisible={this.state.menu}/>
        <Main menuVisible={this.state.menu} updateState={this.updateState.bind(this)}/>
        <Footer />
      </div>
    );
  }
}

export default App;
