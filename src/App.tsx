import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alerts/Alert';

function App(): JSX.Element {
  return (
    <Alert variant="warning" dismissible>
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
    </Alert>
  );
}

export default hot(App);
