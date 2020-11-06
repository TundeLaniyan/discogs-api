import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios'
import './header.scss';

function Header({results, setResults, sort, setSort}) {
  const [input, setInput] = useState('');

  const handleOnSubmit = async(e) => {
      e.preventDefault();
      if (!input) return;
      const {data} = await axios.get(`https://api.discogs.com/database/search?artist=${input}&token=XxBImywNfdYYZQlSmMfuDybRZYHAqQKFQKgiNhjc`)
      setInput('');
      setResults(data.results);
      setSort('title');
  };

  return (
    <div className="header">
        <h1>Discogs API</h1>
        <form className="search" onSubmit={handleOnSubmit}>
            <input 
                type="text" 
                className="search__input"
                placeholder='Please enter artist...'
                value={input}
                onChange={e => setInput(e.target.value)}/>
            <button className="search__btn"><BiSearchAlt/></button>
        </form>
        {results.length ? <select id="sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="title">title</option>
            <option value="year">release year</option>
        </select> : null}
    </div>
  );
}

export default Header;
