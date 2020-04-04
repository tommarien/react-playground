import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alerts/Alert';

function App(): JSX.Element {
  return (
    <div>
      <Alert variant="info">Welcome to our app!</Alert>
    </div>
  );
}

export default hot(App);
