/* eslint-disable react/prop-types */
import { useState } from 'react';

function AddTodo({ addTodo }) {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		const inputValue = e.target.value;
		setValue(inputValue);
	};

	const handleKeyDown = (e) => {
		console.log(e);
		if (e.code === 'Enter' && value.length) {
			handleClick();
		}
	};

	const handleClick = () => {
		if (value.length) {
			addTodo(value);
			setValue('');
		}
	};

	return (
		<div className="d-flex flex-row justify-content-center align-items-center mb-20">
			<input
				type="text"
				value={value}
				placeholder="Ajouter une todo"
				className="mr-15 flex-fill"
				onKeyDown={handleKeyDown}
				onChange={handleChange}
			/>
			<button onClick={handleClick} className="btn btn-primary">
				Ajouter
			</button>
		</div>
	);
}

export default AddTodo;
