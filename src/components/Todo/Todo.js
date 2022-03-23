const Todo = ({tasks}) => {
    return (
        <div>
            <ul>
                {tasks.map((task, index) => <li key={'task_' + index}>{task}</li>)}
            </ul>
        </div>
    );
}
export default Todo;