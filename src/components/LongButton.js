import React from 'react';
import { Button } from 'react-bootstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const LongButton = () => ( 

  <div className="well" style={wellStyles}>
    <Button bsStyle="primary" bsSize="large" block>Create or Edit Products</Button>
    <Button bsSize="large" block>Block level button</Button>
  </div>
);

export default LongButton;
