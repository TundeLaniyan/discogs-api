import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/header';
import Boxes from './component/boxes/boxes';

function App() {
  const [results, setResults] = useState([]);
  const [sort, setSort] = useState('title');

  useEffect(() => {
    const current = [...results];
    current.sort((a ,b) => a[sort] > b[sort] ? 1 : -1);
    setResults(current);
  }, [sort]);

  return (
    <div className="App">
      <Header results={results} setResults={setResults} sort={sort} setSort={setSort}/>
      <Boxes results={results}/>
    </div>
  );
}

export default App;
