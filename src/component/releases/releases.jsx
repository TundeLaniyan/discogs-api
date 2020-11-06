import React from 'react';
import './releases.scss';

function Releases({title, cover_image, country, label, year}) {
  return (
    <div className="releases">
        <div className='releases__title'>{title}</div>
        <div className='releases__image' style={{backgroundImage: `url('${cover_image}')`}}></div>
        {label.slice(0, 5)}
        <div className='releases__bottom'>
          <div>{country}</div>
          <div>{year}</div>
        </div>
    </div>
  );
}

export default Releases;