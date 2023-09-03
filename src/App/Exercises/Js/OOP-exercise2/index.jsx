import React, { useState } from 'react';

export function Exercise() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validate = (value) => {
    if (isNaN(parseInt(value))) {
      throw new Error('Wprowadź poprawną liczbę.');
    }
  }

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    try {
      validate(inputValue);
      setInputValue(inputValue);
      setError('');
    } catch (error) {
      setInputValue(inputValue);
      setError(error.message);
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Wprowadź liczbę"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div style={{ color: 'red' }}>{error}</div>
    </div>
  );
}

export default Exercise;