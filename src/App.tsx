import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alerts/Alert';

function App(): JSX.Element {
  return (
    <div>
      <Alert heading="Well done" variant="info">
        You made it!
      </Alert>
    </div>
  );
}

export default hot(App);
