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

	const deleteTodo = (id) => {
		setTodoList(todoList.filter((todo) => todo._id !== id));
	};

	const toggleTodo = (id) => {
		setTodoList(
			todoList.map((todo) =>
				todo._id === id ? { ...todo, done: !todo.done } : todo
			)
		);
	};

	return (
		<div className="d-flex flex-row justify-content-center align-items-center p-20">
			<div className="card p-20 container">
				<h1 className="mb-20">Todo List</h1>
				<AddTodo addTodo={addTodo} />
				<TodoList
					todoList={todoList}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			</div>
		</div>
	);
}

export default App;
