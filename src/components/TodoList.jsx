/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

function TodoList({ todoList, deleteTodo, toggleTodo }) {
	console.log(todoList);
	return (
		<div>
			{!todoList.length ? (
				<p>La liste est vide</p>
			) : (
				<ul>
					{todoList.map((todo) => (
						// <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
						<TodoItem
							key={todo._id}
							todo={todo}
							deleteTodo={() => deleteTodo(todo._id)}
							toggleTodo={() => toggleTodo(todo._id)}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

export default TodoList;
