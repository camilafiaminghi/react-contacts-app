import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: '@tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg'
      },
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: '@karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg'
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: '@richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg'
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
