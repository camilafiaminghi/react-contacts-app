import React, { Component } from 'react';
import ContactsList from './ContactsList';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }));
      });
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }));

    ContactsAPI.remove(contact);
  }

  render() {
    return (
      <div className="App">
        <ContactsList
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact} />
      </div>
    );
  }
}

export default App;
