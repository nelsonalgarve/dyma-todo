import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	const [todoList, setTodoList] = useState([]);

	const addTodo = (content) => {
		const todo = {
			_id: crypto.randomUUID(),
			content,
			done: false,
			edit: false,
		};
		setTodoList([...todoList, todo]);
	};

	return (
		<div className="d-flex flex-row justify-content-center align-items-center p-20">
			<div className="card p-20 container">
				<h1 className="mb-20">Todo List</h1>
				<AddTodo addTodo={addTodo} />
				<TodoList todoList={todoList} />
			</div>
		</div>
	);
}

export default App;
