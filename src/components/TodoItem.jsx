import Button from './Button';

export default function TodoItem({
	todo,
	deleteTodo,
	toggleTodo,
	editTodo,
	selectTodo,
}) {
	return (
		<li
			onClick={selectTodo}
			className={`mb-10 d-flex justify-content-center align-items-center p-10 ${
				todo.selected ? 'selected' : ''
			}`}
		>
			<span className="flex-fill">
				{todo.content} {todo.done && '✅'}
			</span>
			<Button
				className="btn btn-primary mr-15"
				onClick={(e) => {
					e.stopPropagation();
					toggleTodo();
				}}
				text="Valider"
			/>
			<Button
				className="btn btn-primary mr-15"
				onClick={(e) => {
					e.stopPropagation();
					editTodo();
				}}
				text="Modifier"
			/>
			<Button
				className="btn btn-reverse-primary"
				onClick={(e) => {
					e.stopPropagation();
					deleteTodo();
				}}
				text="Supprimer"
			/>
		</li>
	);
}
