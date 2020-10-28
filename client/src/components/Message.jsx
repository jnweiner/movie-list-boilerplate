import React from 'react';

const Message = (props) => (
  <div className="messagetouser">
    {props.messageToUser}
    <br />
  </div>
);

export default Message;