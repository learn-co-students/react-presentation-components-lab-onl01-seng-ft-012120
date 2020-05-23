import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent  /> 
    {/* idk why we need handleClick={undefined} ???? tests pass without.... is it necessaty to have the callback funtion in here? */}
  </div>,
  document.getElementById('root')
);