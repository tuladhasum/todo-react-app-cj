import React from 'react'
import {List, Form, Button} from 'semantic-ui-react';

const TodoItem = (props) => {
  const {todo, index } = props;
  return (
    <List.Item>
      <List.Content floated="left">
        <Form.Field>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={(e) => props.toggleTodoDone(e, index)}
          />
        </Form.Field>
      </List.Content>

      <List.Content floated="right">
        <Button
          onClick={() => props.removeTodo(index)}
          icon="delete"
          circular
          color="red"
          size="mini" />
      </List.Content>

      <List.Content>
        <List.Header as='div' className={todo.done ? 'done' : ''} >
          {todo.title}
        </List.Header>
      </List.Content>
    </List.Item>
  )
}

export default TodoItem
