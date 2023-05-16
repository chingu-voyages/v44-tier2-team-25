import React from 'react';
import './styles.css'
import Speed from './components/Speed'
import Operation from './components/Operation';

function App() {
  return <div className="controller">
    <Speed/>
    <Operation/>
  </div>;
}

export default App;
