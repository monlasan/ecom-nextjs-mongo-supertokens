import React from 'react';

export default function OutLink({ children, link, inn }) {
  return (
    <a
      href={link}
      className='underline'
      target={`${inn ? '_self' : '_blank'}`}
      rel='noopener norefeerer'
    >
      {children}
    </a>
  );
}
