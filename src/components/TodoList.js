import React from 'react';

function TodoList(props){
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<h3>{props.task}</h3>
				</div>
				<div className="col-6">
					<button>Delete</button>
				</div>

			</div>

		</div>
	)
}

export default TodoList;