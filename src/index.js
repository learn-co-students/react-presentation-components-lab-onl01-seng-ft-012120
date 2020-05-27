import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(
  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={function handleClick() {console.log("SIMPLE CLICKE!")}} />
  </div>,
  document.getElementById('root')
);