import React from 'react'

import {Button} from 'semantic-ui-react';

function TodoFilter(props) {
  return (
    <Button.Group size="mini">
      <Button onClick={() => props.allDone()} color="green">All Done</Button>
      <Button onClick={() => props.allRemaining()} color="red">All Remaining</Button>
    </Button.Group>
  )
}

export default TodoFilter
