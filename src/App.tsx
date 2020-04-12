import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App(): JSX.Element {
  return (
    <>
      <Alert variant="warning" dismissible>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
      <Button type="button">Push me</Button>
    </>
  );
}

export default hot(App);
