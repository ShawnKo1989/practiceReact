import { useState } from 'react';
import Input from './Input';
import {isEmail, isNotEmpty,hasMinLength} from '../util/validation.js';

export default function Login() {
  // const[enterEmail, setEnterEmail] = useState();
  // const [enterPassword, setEnterPassword] = useState();
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = 
    didEdit.email && 
    !isEmail(enteredValues.email) &&
    !isNotEmpty(enteredValues.email);
  const passwordIsInvalid = 
    didEdit.password && 
    !hasMinLength(enteredValues.password.trim(), 6);
  
  function handleSubmit(event){
    event.preventDefault();
    console.log('User Email :' + enteredValues.email);
    console.log('User Password :' + enteredValues.password);
    console.log(enteredValues);
  }

  function handleInputChange(identifier, event){
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: event.target.value
    }))
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier){
    console.log('blur is working very well!');
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="Email" 
        id="email" 
        type="email" 
        name="email" 
        onBlur={
          () => handleInputBlur('email')
        }
        onChange={
          (event) => handleInputChange('email',event)
        } 
        value={enteredValues.email}
        error={emailIsInvalid && 'Please enter a valid email address.'}
        />
        
        <Input 
        label="Password" 
        id="password" 
        type="password" 
        name="password"
        onChange={
          (event) => handleInputChange('password',event)
        }
        onBlur = {
          () => handleInputBlur('password')
        }
        value={enteredValues.password}
        error={passwordIsInvalid && 'Please enter a valid password.'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >
          Login
        </button>
      </p>
    </form>
  );
}
