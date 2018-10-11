import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const contacts = this.props.contacts;
    const contactsList = contacts.map(contact => (<li key={contact.name}>{contact.name}</li>))
    return (
      <ol>{contactsList}</ol>
    )
  }
}

export default ContactList;