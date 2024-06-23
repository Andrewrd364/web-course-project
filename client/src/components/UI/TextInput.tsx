import React, { useEffect, useRef, useState } from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  mode:number;
}

const TextInput: React.FC<TextInputProps> = ({ label, placeholder, mode }) => {
  const [borderColor, setBorderColor] = useState<string>('#e0e0e0');

  const handleFocus = () => setBorderColor('red');
  const handleBlur = () => setBorderColor('#e0e0e0');
  const [inputWidth, setInputWidth] = useState<string>('auto');
  const spanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (spanRef.current) {
      // Добавляем небольшой отступ, чтобы текст не был обрезан
      setInputWidth(`${spanRef.current.offsetWidth + 10}px`);
    }
  }, [placeholder]);
  return (
    <>
    {mode===0?(
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: `2px solid ${borderColor}`, 
        borderRadius: '10px', 
        padding: '10px', 
        margin: '10px 0' 
      }}>
        <label style={{ marginRight: '10px' }}>{label}</label>
        <div style={{ 
          width: '1px', 
          height: '20px', 
          // border: `0.5px solid #e0e0e0`,
          backgroundColor: '#e0e0e0', 
          margin: '0 10px' 
        }}></div>
        <input
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ border: 'none', outline: 'none', flex: 1 }}
        />
      </div>
    ):(
       <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
         <label style={{ marginRight: '10px' }}>{label}</label>
        <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent:"center",
        margin: '8px 0',
        border: `2px solid ${borderColor}`,
        padding:"10px",
        borderRadius: '10px', 
      }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
      <span 
        ref={spanRef} 
        style={{ 
          visibility: 'hidden', 
          whiteSpace: 'nowrap', 
          position: 'absolute', 
          fontSize: 'inherit', 
          fontFamily: 'inherit', 
          fontWeight: 'inherit', 
          letterSpacing: 'inherit'
        }}
      >
        {placeholder}
      </span>
      <input
          type="text"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ border: 'none', outline: 'none', width:inputWidth}}
        />
    </div>
        
      </div>
       </div>
    )}
    </>
    
  );
};

export default TextInput;
