import React, { useEffect, useState } from "react";
import logo from "../../../../../public/assets/img/faq/message.png";
import sendButton from "../../../../../public/assets/img/faq/send.png";
import companylogo from "../../../../../public/assets/img/logo/logo-black.svg"
import Message from "./Message";
import Image from "next/image";
import WelcomeScreen from "./WelcomeScreen";

const Chatbot = () => {
	const [started, setStarted] = useState(false);
	const [dept, selectDept] = useState("");
	const [messages, setMessages] = useState([]);
     const [msg, setMsg] = useState("");

	const startChat = () => {
		setStarted(!started);
	};

	const sendButtonClick = () => {
		console.log("ccl", msg)
		setMessages([...messages, {text: msg, sender: "user"}]);
		setMsg("")
	}
	
	useEffect(() => {
		if (dept.length > 0) {
			setMessages([...messages, { id: 1, text: `Connected with ${dept} Department`, sender: "bot" }]);
		}
	},[dept])

	return (
		<div className="chatbot-logo h-screen bg-gray-100 p-4">
			{console.log(dept)}
			{started && (
				<div className="w-full chat-box max-w-md bg-white rounded-lg shadow-md">
					<div className="p-4 border-b">
					<Image
				src={companylogo}
				alt="amez-image"
				className="company-logo"
				onClick={startChat}
			/>
						<h3 className="text-lg font-bold">
							Virtual Assistant
						</h3>
					</div>
	
					<div className="overflow-y-auto">
						
					{dept.length == 0 ? 
						<WelcomeScreen selectDept={selectDept}/> : <>
						{messages.map((msg) => (
							<Message text={msg.text} sender={msg.sender} />
						))}
						</>}
                              
					</div>
					<div className="chat-input-container">
						<input
							type="text"
							className="message-input"
							placeholder="Type your message here..."
							value={msg}
							onChange={e => setMsg(e.target.value)}
						/>
						<Image
						alt="send-button"
						className="send-button"
						src={sendButton}
						onClick={sendButtonClick}
					   />
					</div>
				</div>)}
			<Image
				src={logo}
				alt="amez-image"
				className="chat-logo"
				onClick={startChat}
			/>
		</div>
	);
};

export default Chatbot;
