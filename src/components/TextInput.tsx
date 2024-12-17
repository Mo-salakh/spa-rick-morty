import React, { useContext } from 'react';
import { AppContext } from '../context';

interface InputProps {
  name: string;
  label: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'emailIn';
  required?: boolean;
  error?: boolean
  placeHolder?: string;
}

export function TextInput({
  name,
  label,
  value,
  type = 'text',
  required = false,
  placeHolder,
  error
}: InputProps) {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error('Ошибка в useContext-e');
  }

  const labelText = `${label}${required ? '*' : ''}`;
  return (
    <div className="input_box">
      <label className="label" >
      {labelText}
      {error && <span className="error-message">Ошибка ввода</span>}
        <input
          className="input"
          placeholder={placeHolder}
          name={name}
          type={type}
          value={value}
          required={required}
        />
      </label>
    </div>
  );
}

