import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinjas';

class App extends Component {
  state = {
    ninjas : [
      {name : 'Ryu', age : 30, belt: 'black', id: 1},
      {name : 'Yoshi', age : 20, belt: 'green', id: 2},
      {name : 'Crystal', age : 25, belt: 'pink', id: 3}
    ]
  };

  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas : ninjas 
      });
  };

  render() {
    return (
      <div className="App">
       <h1>My first react app !</h1>
       <p>Welcome</p>
       <AddNinja addNinja={this.addNinja}/>
       <br/>
       <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
  
}

export default App;