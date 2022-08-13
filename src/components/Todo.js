import React, { useState } from 'react'
import TodoList from './TodoList'

function Todo() {

	const [task, setTask] = useState('fdf');
	const [data, setData] = useState([]);

	const onChangeHandler = (e) => {
		setTask(e.target.value)
	} 

	const addTask = (e) => {
		e.preventDefault();
		const newData = task;
		setData([...data, newData]);
		setTask('')
	}

	return (
		<div className='container'>
			<div className='row justify-content-center align-item-center'>
				<div className='col'>
					<h1>Todo App</h1>
				</div>
			</div>
			<form onSubmit={addTask}>
				<div className="">
					<div className='form-group'>
						<input 
							type="text" 
							className="form-control"
							value={task}
							onChange={onChangeHandler}
						 />
					</div>
					<button type="submit" className="btn btn-secondary p-1">Add</button>
				</div>
			</form>

			{
				data.map((value,index)=>{
					<TodoList 

					key={index}
					id={index}
					task={value}
					/>
				})
			}
		</div>
	)
}

export default Todo;