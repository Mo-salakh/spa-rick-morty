import { useContext, useRef, useState } from 'react';
import { AppContext } from '../context';
import { TextInput } from './TextInput';
import {  useNavigate } from 'react-router-dom';

export function Signup() {

  const context = useContext(AppContext);
  if (context === null) {
    throw new Error('Ошибка в useContext-e');
  }


  

  const { setIsSigned, signup } = context;

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const formRef = useRef(null)
  const navigate = useNavigate()

  

function handleSubmitIn(e) {
  e.preventDefault();
  let email = e.currentTarget.emailin.value;
  let password = e.currentTarget.passwordin.value;
  let isValid = signup(email, password);

  
  if (isValid === true) {
    setIsSigned(true);
    navigate('/', {replace: true});
    formRef.current?.reset()
    setEmailError(false);
    setPasswordError(false);
  } else {
    alert('Ошибка! Неправильно ввели логин или пароль');
    setEmailError(true);
    setPasswordError(true);
  }
}  
return (
  <div className="signIn">
    <h1 className="signIn-title title">Вход</h1>
    <form onSubmit={handleSubmitIn} className='signin' ref={formRef}>
      <TextInput
        label="Электронный адрес почты"
        placeHolder='Ваш электронный адрес почты'
        type='email'
        name='emailin'
        required
        error={emailError}
      />
      <TextInput
        label="Пароль"
        placeHolder='Ваш пароль'
        name='passwordin'
        type='password'
        required
        error={passwordError}
      />
      <button type="submit">Войти</button>
    </form>
  </div>
);
}
