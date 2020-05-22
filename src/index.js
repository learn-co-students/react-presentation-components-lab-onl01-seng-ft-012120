import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => {console.log("Anakin says: 'IT'S WOOORRRKKKKIIINNNGG!!!")}} />
  </div>,
  document.getElementById('root')
);