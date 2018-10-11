import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ContactsList extends Component {
  render() {
    const contacts = this.props.contacts;
    const contactsList = contacts.map(contact => (<li key={contact.name}>{contact.name}</li>))
    return (
      <ol>{contactsList}</ol>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactsList contacts={[
          { name: 'Tyler' },
          { name: 'Karen' },
          { name: 'Richard' }
        ]}/>

        <ContactsList contacts={[
          { name: 'Popie' },
          { name: 'Gigio' },
          { name: 'Tutti' },
          { name: 'Tica' },
          { name: 'Bruce' },
          { name: 'Titi' },
          { name: 'Kiki' }
        ]}/>
      </div>
    );
  }
}

export default App;
