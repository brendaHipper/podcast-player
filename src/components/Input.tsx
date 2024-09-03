import React, { ChangeEvent } from 'react';

type InputProps = {
    label: string;
    type?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type = 'text', value, onChange }: InputProps) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                style={{ padding: '0.5rem', width: '100%' }}
            />
        </div>
    );
};

export default Input;

