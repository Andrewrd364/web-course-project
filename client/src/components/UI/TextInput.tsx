import React, { useState } from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => {
  const [borderColor, setBorderColor] = useState<string>('#e0e0e0');

  const handleFocus = () => setBorderColor('red');
  const handleBlur = () => setBorderColor('#e0e0e0');

  return (
    <div style={{ display: 'flex', alignItems: 'center', border: `2px solid ${borderColor}`, borderRadius: '10px', padding: '10px', margin: '10px 0' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ border: 'none', outline: 'none', flex: 1 }}
      />
    </div>
  );
};

export default TextInput;
