import { useTodoContext } from "../providers/TodoProvider";

const TodoList = () => {
    const { todoList, removeTodo } = useTodoContext();

    return (
        <ul className="list"><br />
            {todoList.map((todo, index) => (
                <li className="list-item" key={index}>
                    {todo}
                    <button className="delete-button" onClick={() => removeTodo(index)}>x</button>
                </li>
            ))}
        </ul>
    );
};
 
export default TodoList;