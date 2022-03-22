import {createSlice} from  '@reduxjs/toolkit';

import {TaskData} from "../FakeData";



export const taskSlice = createSlice({
    name : "task",
    initialState: {value:  TaskData }, 
    reducers: {
        addTask: (state, action) => {

            state.value.push(action.payload);

        },
        
        deleteTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id);
        },
        
        updateTask: (state, action) => {
            state.value.map((task) => {
                if(task.id === action.payload.id) {
                    task.name = action.payload.name;
                    task.time = action.payload.time;
                }
            })
        }
    }
}); 


export const {addTask, deleteTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer;