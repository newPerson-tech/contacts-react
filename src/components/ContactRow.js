import React from "react";

const ContactRow = ({ contact, onDelete }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.username}</td>
      <td>{contact.phone}</td>
      <td>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ContactRow;
