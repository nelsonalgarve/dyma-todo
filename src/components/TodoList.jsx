/* eslint-disable react/prop-types */
import EditTodo from './EditTodo';
import TodoItem from './TodoItem';

function TodoList({ todoList, deleteTodo, toggleDone, toggleEdit }) {
	console.log(todoList);
	return (
		<div>
			{!todoList.length ? (
				<p>La liste est vide</p>
			) : (
				<ul>
					{todoList.map((todo) =>
						todo.edit ? (
							<EditTodo key={todo._id} todo={todo} />
						) : (
							<TodoItem
								key={todo._id}
								todo={todo}
								deleteTodo={() => deleteTodo(todo._id)}
								toggleDone={() => toggleDone(todo._id)}
								toggleEdit={() => toggleEdit(todo._id)}
							/>
						)
					)}
				</ul>
			)}
		</div>
	);
}

export default TodoList;
