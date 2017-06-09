import React from 'react';
import Input from './Input';

import './Form.css';

function Form({ onSubmit }) {
  return (
    <form className="signup" onSubmit={onSubmit}>
      <Input type="text" id="firstname" placeholder="Name" />
      <Input id="email" type="email" placeholder="Email" />
      <Input id="password" type="password" placeholder="Password" />
      <button className="button">
        Sign up
      </button>
    </form>
  );
}

export default Form;
