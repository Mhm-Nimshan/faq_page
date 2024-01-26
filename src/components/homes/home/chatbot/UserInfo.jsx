import apiService from '@/src/service/api.service';
import React, { useEffect, useState } from 'react';


const UserInfo = ({setChat}) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [department, setDepartment] = useState('');
	const [allDepartments, setAllDepartments] = useState([]);

	useEffect(() => {
        apiService.getAllDepartments().then((res) => {
		console.log(res)
             setAllDepartments(res.department);
	   })
	},[])

	const startChat = () => {
		// Implement your start chat logic
		console.log(name, email, phone);
		const data = {
			name,
			email,
			mobileNo: phone,
			dept_id: department
		}
		apiService.createCustomer(data).then((res) => {
			console.log(res);
			localStorage.setItem("chat", JSON.stringify(res.chat));
			setChat({
				id: res.chat.id,
				customer: res.chat.customer,
				department: res.chat.department,
				representative: res.chat.representative
			})
		})
	};

	return (
		<div className="form-container">

			<input
				type="text"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				className="form-input"
				placeholder="Your Name"
			/>
			<input
				type="email"
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className="form-input"
				placeholder="Your Email"
			/>

			<input
				type="tel"
				id="phone"
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				className="form-input"
				placeholder="Your Phone"
			/>
			<select
				id="department"
				value={department}
				onChange={(e) => setDepartment(e.target.value)}
				className="form-input"
			>
				{allDepartments?.map((dept) => (
					<option value={dept.id}>{dept.name}</option>
				))}
				{/* Add more options as needed */}
			</select>
			<button className="form-button" onClick={startChat}>
				Start Chat
			</button>
		</div>
	);
};

export default UserInfo;
