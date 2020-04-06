import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alerts/Alert';

function App(): JSX.Element {
  return (
    <Alert heading="Well done!" variant="success">
      <p>You made it!</p>
    </Alert>
  );
}

export default hot(App);
