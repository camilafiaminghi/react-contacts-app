import React from 'react';
import PropTypes from 'prop-types';

/* CHANGE TO SFC - Stateless Functional Component */
function ContactsList (props) {
	const contacts = props.contacts;

  const contactsList = contacts.map(contact => (
		<li key={contact.id} className='contact-list-item'>
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
				onClick={() => props.onDeleteContact(contact)}>
				Remove
			</button>
		</li>
  ));

  return (
    <ol>{contactsList}</ol>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactsList;