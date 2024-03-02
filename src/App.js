import React from 'react';
import AbountUs from './aboutUs';
import Servises from './services';
import './App.css';
function App() {
  return (
    <React.Fragment>
      <div className='container'>
          <AbountUs/>
          <Servises/>
      </div>
    </React.Fragment>
  );
}
export default App;
