const Todo = ({tasks}) => {
    return (
        <div>
            <ul>
                {tasks.map(task => <li>{task}</li>)}
            </ul>
        </div>
    );
}
export default Todo;