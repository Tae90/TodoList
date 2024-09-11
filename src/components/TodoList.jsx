import TodoItem from './TodoItem'

const TodoList = ({ todoList }) => {
    return (
        <ul className="todoList">
            {todoList.map((todo) => (
                < TodoItem key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    )
}

export default TodoList