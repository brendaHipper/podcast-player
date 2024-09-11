import './Input.css'
import { ChangeEvent } from 'react';

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, name, value, onChange }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;


