/* eslint-disable react/prop-types */
function TodoList({ todoList }) {
	console.log(todoList);
	return (
		<div>
			{!todoList.length ? (
				<p>La liste est vide</p>
			) : (
				<ul>
					{todoList.map((e) => (
						<li key={e._id}>{e.content}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default TodoList;
