import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let alertMood = () => {alert('I am Happy')}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.alertMood()} />
  </div>,
  document.getElementById('root')
);