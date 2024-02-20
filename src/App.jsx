import { useState } from 'react';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className="d-flex flex-row justify-content-center align-items-center p-20">
			<div className="card p-20 container">
				<h1 className="mb-20">Todo List</h1>
				<AddTodo />
				<TodoList />
				<EditTodo />
				<TodoItem />
			</div>
		</div>
	);
}

export default App;
