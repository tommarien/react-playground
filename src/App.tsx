import { hot } from 'react-hot-loader/root';
import React from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import Badge from './components/Badge';

function App(): JSX.Element {
  return (
    <div className="container">
      <Alert variant="warning" dismissible>
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
      <Button
        type="button"
        variant="danger"
        // eslint-disable-next-line no-alert
        onClick={() => alert('You pushed')}
      >
        Push me
      </Button>

      <Badge variant="success">
        15 messages
      </Badge>
    </div>
  );
}

export default hot(App);
