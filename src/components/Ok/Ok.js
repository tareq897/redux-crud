import React from 'react';
import './Ok.css'
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, deleteTask, updateTask} from '../features/Task';

const Ok = () => {
    const dispatch = useDispatch();
    const taskList = useSelector((state) => state.task.value )


    const [name, setName] = useState("");
    const [ time, setTime] = useState("");
    const [newname, setNewname] = useState("");
    const [newtime, setNewtime] = useState("");

    return (
        <div className="whole">
            <div className="addTask">

                <input type="text" placeholder="item" onChange={ (event) => {
                    setName(event.target.value)}}></input>
                <input type="text" placeholder="time" onChange={ (event) => {
                    setTime(event.target.value)}}></input>
                <button onClick={ () => {dispatch(addTask({id: taskList[taskList.length -1].id + 1, name, time})) }}>Add User</button>

            </div>
            <div className="showTask" id="down">
                {taskList.map((task) => {
                    return<div>
                        <h1>{task.name}</h1>
                <h2>{task.time}</h2>
                <input type="text" placeholder="update task" onChange={ (event) => {
                    setNewname(event.target.value)}}></input>
                    <input type="text" placeholder="update time" onChange={ (event) => {
                    setNewtime(event.target.value)}}></input>
                    
                    <button onClick={() => {
                        dispatch(updateTask({id: task.id, name: newname, time: newtime}));
                    }}> Update</button> 
                    <button onClick={() =>  { 
                    dispatch(deleteTask({id: task.id  }));}}> Delete</button>
                    
                    </div>
                })}
            </div>
        </div>
    );
};

export default Ok;