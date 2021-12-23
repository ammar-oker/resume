import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Chip({ name, icon, className }) {
  const renderIcon = () => {
    return typeof icon === 'object' ? (
      <FontAwesomeIcon icon={icon} height="16px" />
    ) : (
      <img src={icon} alt={name} height="16px" style={{ marginTop: '-2px' }} />
    );
  };
  return (
    <div className={`tech-chip ${className}`}>
      {renderIcon()}
      {name && <span>{name}</span>}
    </div>
  );
}
