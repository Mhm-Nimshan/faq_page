import React, { useState } from 'react';

const UserInfo = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log('Name:', name);
		console.log('Email:', email);
		console.log('Mobile Number:', mobileNo);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Mobile Number:
				<input
					type="tel"
					value={mobileNo}
					onChange={(e) => setMobileNo(e.target.value)}
				/>
			</label>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserInfo;
