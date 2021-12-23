import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SocialLink({ title, icon, href, className }) {
  return (
    <a
      className={`text-decoration-none fs-5 ${className}`}
      target="_blank"
      rel="noreferrer"
      href={href}
      title={title}
    >
      <FontAwesomeIcon height="20px" icon={icon} />
    </a>
  );
}
