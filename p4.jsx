import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';
import './styles/main.css';


ReactDOM.render(
  <div>
    <Header/>
    <Switcher/>
  </div>,
  
  document.getElementById('reactapp'),
);

function Switcher() {
  const [switcher, setSwitcher] = useState(true);
  const switcherOnClick = () => setSwitcher(switcherBool => !switcherBool);
  return (
     <div>
        <div className="switch-button-container">
          <button className="switch-button" onClick={switcherOnClick}>
            Switch to {switcher ? "States" : "Example"}
          </button>
        </div>
        {switcher && <Example/> }
        {!switcher && <States /> }
     </div>
  );
}