/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TodoItem({ todo, deleteTodo, toggleTodo, toggleEdit }) {
	return (
		<li className="mb-10 d-flex flex-row justify-content-center align-items-center p-10">
			<span className="flex-fill mr-15">
				{todo.content} {todo.done && `ok`}
			</span>
			<button onClick={toggleTodo} className="btn btn-primary mr-10">
				{todo.done ? `Annuler` : `Valider`}
			</button>
			<button onClick={toggleEdit} className="btn btn-primary mr-10">
				Modifier
			</button>
			{/* <button
				onClick={() => deleteTodo(todo._id)}
				className="btn btn-reverse-primary mr-10"
			> */}
			<button onClick={deleteTodo} className="btn btn-reverse-primary mr-10">
				Supprimer
			</button>
		</li>
	);
}

export default TodoItem;
