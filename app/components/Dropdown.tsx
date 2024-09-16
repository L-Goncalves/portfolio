"use client"
import React, { useState } from 'react';
import '../styles/Dropdown.scss';

const Dropdown = () => {
  const [selected, setSelected] = useState('br'); 
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (value: string) => {
    setSelected(value);
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {selected === 'br' ? '🇧🇷' : '🌍'}
      </button>
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <div onClick={() => handleChange('br')} className="dropdown-item">Português</div>
        <div onClick={() => handleChange('en')} className="dropdown-item">English </div>
      </div>
    </div>
  );
};

export default Dropdown;
