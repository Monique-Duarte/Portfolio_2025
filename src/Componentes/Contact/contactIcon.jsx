import React from 'react';

const ContactIcon = ({ href, iconClass, label }) => {
  return (
    <div className="p-0">
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <i className={`${iconClass} fs-3 mx-2`}></i>
      </a>
    </div>
  );
};

export default ContactIcon;
