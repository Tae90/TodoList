import React from 'react'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const TodoContainer = ({ todoList }) => {
    return (
        <div className='container'>
            <TodoHeader />
            <TodoInput />
            <TodoList todoList={todoList} />
            <TodoFooter />
        </div>
    )
}

export default TodoContainer