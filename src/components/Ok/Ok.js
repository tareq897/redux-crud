import React from 'react';
import './Ok.css'
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTask, deleteTask, updateTask} from '../features/Task';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const Ok = () => {
    const dispatch = useDispatch();
    const taskList = useSelector((state) => state.task.value )


    const [name, setName] = useState("");
    const [ phone, setPhone] = useState("");
    const [ hobbies, setHobbies] = useState("");
    const [newname, setNewname] = useState("");
    const [newphone, setNewphone] = useState("");
    const [newhobbies, setNewhobbies] = useState("");

    const taskSlice = taskList.slice(0, 10);


    return (
        <div   className="whole">
            <div className="addTask">

                <input type="text" placeholder="name" onChange={ (event) => {
                    setName(event.target.value)}}></input>
                <input type="text" placeholder="phone" onChange={ (event) => {
                    setPhone(event.target.value)}}></input>
                    <input type="text" placeholder="hobbies" onChange={ (event) => {
                    setHobbies(event.target.value)}}></input>
                <Button onClick={ () => {dispatch(addTask({id: taskList[taskList.length -1].id + 1, name, phone, hobbies})) }}>Add User</Button>

            </div>

            <div >

            <Table striped bordered hover size="sm">

            <thead>
    <tr>
      <th>Name</th>
      <th>Phone</th>
      <th>Hobbies</th>

    </tr>
  </thead>

  <tbody>
            
                {taskSlice.map((task) => {
                    return(


        <tr>
                    <td>{task.name}</td>
                    <td>{task.phone}</td>
                    <td>{task.hobbies}</td>



                    <td><input type="text" placeholder="update name" onChange={ (event) => {
                    setNewname(event.target.value)}}></input></td>

                    <td><input type="text" placeholder="update phone" onChange={ (event) => {
                    setNewphone(event.target.value)}}></input></td>

                   <td><input type="text" placeholder="update hobbies" onChange={ (event) => {
                    setNewhobbies(event.target.value)}}></input></td>

                   <td><Link to={`/edit`}><Button onClick={() =>{
                        dispatch(updateTask({id: task.id, name: newname, phone: newphone, hobbies: newhobbies}));
                    }} variant="info"> Update</Button></Link></td>


                    <td><Button onClick={ ()=>  { 
                    dispatch(deleteTask({id: task.id  }));}} variant="danger"> Delete</Button></td>

                    </tr>
                    )
                    
                    
               
                       
                        {/* <h1>{task.name}</h1>
                <h2>{task.time}</h2>
                <input type="text" placeholder="update task" onChange={ (event) => {
                    setNewname(event.target.value)}}></input>
                    <input type="text" placeholder="update time" onChange={ (event) => {
                    setNewtime(event.target.value)}}></input>
                    
                    <button onClick={() => {
                        dispatch(updateTask({id: task.id, name: newname, time: newtime}));
                    }}> Update</button> 
                    <button onClick={() =>  { 
                    dispatch(deleteTask({id: task.id  }));}}> Delete</button> */}
                    
                  
                })}

</tbody>
            
            </Table>
            </div>
        </div>
    );
};

export default Ok;