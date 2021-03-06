import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ContactsList extends Component {

	static propTypes = {
	  contacts: PropTypes.array.isRequired,
	  onDeleteContact: PropTypes.func.isRequired,
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query.trim()
		}))
	}

  clearQuery = () => {
    this.updateQuery('');
  }

	render() {
		const {contacts, onDeleteContact} = this.props;
		const {query} = this.state;
		const filteredContacts = (query === '')
			? contacts
			: contacts.filter((contact) => (
					contact.name.toLowerCase().includes(query.toLowerCase()) /* prototype.includes is not suppoted by ie */
				));

	  const contactsList = filteredContacts.map((contact, index) => (
			<li key={index} className='contact-list-item'>
				<div
					className='contact-avatar'
					style={{
						backgroundImage: `url(${contact.avatarURL})`
					}}>
				</div>

				<div className='contact-details'>
					<p>{contact.name}</p>
					<p>{contact.handle}</p>
				</div>

				<button
					className='contact-remove'
					onClick={() => onDeleteContact(contact)}>
					Remove
				</button>
			</li>
	  ));

		return (
			<div className='list-contacts'>
				<div className='list-contacts-top'>
					<input
						className="search-contacts"
						type="text"
						placeholder="Search Contacts"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}/>

            <Link
              to='/create'
              className='add-contact'>
              Add Contact
            </Link>
				</div>

        {filteredContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {filteredContacts.length} of {contacts.length}</span>
            <button type="button" onClick={this.clearQuery}>Show all</button>
          </div>
        )}

				<ol>{contactsList}</ol>
			</div>
		);
	}
}

export default ContactsList;
