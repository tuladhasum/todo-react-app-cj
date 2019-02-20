import React from 'react'
import {Form, Button} from 'semantic-ui-react'

const NewTodoForm = (props) => {
  return (
      <Form onSubmit={props.formSubmitted} >
        <Form.Field>
          <label htmlFor="newTodo">New Todo</label>
          <input
            id="newTodo"
            name="newTodo"
            onChange={props.newTodoChanged}
            value={props.newTodo}
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
  )
}

export default NewTodoForm
