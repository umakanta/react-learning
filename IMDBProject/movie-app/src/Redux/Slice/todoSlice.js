import { createSlice } from "@reduxjs/toolkit";



const TodoSlice = createSlice({
    name: "todoList",
    initialState: {
        todoList: []
    },
    reducers: {
        addTask: (state, action) => {
            console.log("Action: ", action);
            state.todoList = [...state.todoList, action.payload];
        }
    }
})

export const { addTask } = TodoSlice.actions;
export default TodoSlice.reducer;