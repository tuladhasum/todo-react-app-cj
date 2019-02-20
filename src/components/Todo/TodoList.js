import React from 'react'
import { List} from 'semantic-ui-react'
import TodoItem from './TodoItem';


function TodoList(props) {
  return (
    <List divided relaxed>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            index={index}
            key={index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
            /> 
        )
      })}
    </List>
  )
}

export default TodoList
