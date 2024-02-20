import { useState } from 'react';

function App() {
	const [userList, setUserList] = useState([]);
	const [user, setUser] = useState({
		name: '',
		age: null,
	});

	const handleClick = (e) => {
		e.preventDefault();
		console.log(user);
		const newUserList = [...userList, { ...user }];
		setUserList(newUserList);
	};

	const handleInput = (e) => {
		let value = e.target.value;
		const name = e.target.name;

		if (name === 'age') {
			value = +value;
		}
		setUser({ ...user, [name]: value });
	};

	const handleClickDeleteUser = (index) => {
		console.log(index);
		const newUserList = userList.filter((u, i) => i !== index);

		setUserList(newUserList);
	};

	const handleClickSort = () => {
		const newUserList = [...userList];
		newUserList.sort((a, b) => a.name.localeCompare(b.name));
		setUserList(newUserList);
	};
	console.log(userList);
	return (
		<div className="d-flex flex-column justify-content-center align-items-center p-20">
			<form className="d-flex flex-column card p-20">
				<input
					name="name"
					type="text"
					className="mb-20"
					onInput={handleInput}
					placeholder="name"
				/>
				<input
					name="age"
					type="number"
					className="mb-20"
					onInput={handleInput}
				/>
				<button className="btn btn-primary" onClick={handleClick}>
					Submit
				</button>
			</form>
			<button
				className="btn btn-reverse-primary mb-20"
				onClick={handleClickSort}
			>
				Trier la liste
			</button>
			<ul>
				{userList.length
					? userList.map((u, index) => (
							<li className="d-flex flex-row" key={index}>
								<span className="flex-fill">
									{u.name} {u.age}
								</span>
								<button
									onClick={(e) => handleClickDeleteUser(index)}
									className="btn btn-primary"
								>
									Delete
								</button>
							</li>
					  ))
					: null}
			</ul>
		</div>
	);
}

export default App;
