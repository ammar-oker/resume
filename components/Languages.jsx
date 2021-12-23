import React from 'react';
import Chip from './Chip';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

export default function Languages({ className }) {
  return (
    <section className={className}>
      <h3 className='fs-6 text-uppercase text-primary'><b>Languages</b></h3>
      <ul className="list-inline">
        <Chip className="list-inline-item mb-1" name='English' icon={faLanguage} />
        <Chip className="list-inline-item" name='Arabic' icon={faLanguage} />
        <Chip className="list-inline-item" name='Turkish (Basic)' icon={faLanguage} />
      </ul>
    </section>
  );
}