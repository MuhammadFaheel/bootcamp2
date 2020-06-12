import React from 'react';
import Demo from './components/Demo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Demo friendName='Noman' filmName='Wanted' ageName='21' />
      <Demo friendName='Zain' filmName='The Lucy' ageName='23' />
    </div>
  );
}

export default App;
