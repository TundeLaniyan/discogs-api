import React from 'react';
import Releases from '../releases/releases';
import './boxes.scss';

function Boxes({results}) {
  return (
    <div className="boxes">
        {results.map((cur, i) => <Releases {...cur} key={i}/>)}
    </div>
  );
}

export default Boxes;
