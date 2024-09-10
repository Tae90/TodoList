import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
    const todoList = [
        { no: 1, name: '할일1', status: 0 },
        { no: 2, name: '할일2', status: 0 },
        { no: 3, name: '할일3', status: 0 },
    ]
    return (
        <ul className="todoList">
            {todoList.map((todo) => (
                < TodoItem key={todo.no}
                    todo={todo}
                />
            ))}
        </ul>
    )
}

export default TodoList