import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../Redux/Slice/todoSlice";

function TodoList() {

    const [value, setValue] = useState("")

    const todoListTasks = useSelector((state) => state.todoState.todoList);
    console.log("TODO:", todoListTasks)
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addTask(value));
        console.log("v1:", value);
        setValue("");

    }

    return <div>
        <form onSubmit={onFormSubmit}>
            <input onChange={(e) => {
                setValue(e.target.value)
            }} type="text" placeholder="Enter Task" value={value} />

            <input type="submit" className="bg-red-400 m-10 px-[2rem]"/>
        </form>

        <div>
            {
                todoListTasks.map((todo) => {
                    return <h3>{todo}</h3>
                })
            }
        </div>
    </div>
}

export default TodoList;