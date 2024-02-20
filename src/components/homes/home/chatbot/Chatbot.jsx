import React, { useEffect, useState } from "react";
import logo from "../../../../../public/assets/img/faq/message.png";
import sendButton from "../../../../../public/assets/img/faq/send.png";
import companylogo from "../../../../../public/assets/img/logo/logo-black.svg"
import Message from "./Message";
import io from "socket.io-client";
import Image from "next/image";
import WelcomeScreen from "./WelcomeScreen";
import useChatState from "@/src/hooks/useChatState";
import apiService from "@/src/service/api.service";

const Chatbot = () => {
	const [started, setStarted] = useState(false);
	const [dept, selectDept] = useState("");
	const [messages, setMessages] = useState([]);
	const [msg, setMsg] = useState("");
	const [chat, setChat] = useChatState();
	const [socket, setSocket] = useState(null);
	const [isOnline, setIsOnline] = useState(true);

	useEffect(() => {
		if (chat.id) {
			apiService.getMessagesByChatId(chat.id).then((res) => {
				setMessages(res.messages);
			})

			// Initialize socket connection when a user is selected
			const newSocket = io.connect("http://localhost:3001", {
				transports: ["websocket"],
				query: { chat_id: chat.id }
			});

			newSocket.on('connect', () => {
				console.log(`Connected to server with socket ID: ${newSocket.id}`);
			});

			newSocket.on('disconnect', () => {
				console.log('Disconnected from server');
			});

			newSocket.on('receiveMessage', (message) => {
				setMessages(prevMessages => [...prevMessages, message]);
			});

			newSocket.on('receiveAgentOnline', (data) => {
				setIsOnline(data.isAgentOnline);
			});

			setSocket(newSocket);

			// Cleanup on component unmount
			return () => {
				newSocket.disconnect();
			};
		}
	}, [chat])

	useEffect(() => {
		const handleVisibilityChange = () => {
			const currentPageIsActive = !document.hidden;
			console.log('Page is now', currentPageIsActive ? 'focused' : 'unfocused');

			// Since currentPageIsActive reflects the new state, the condition was updated accordingly
			if (currentPageIsActive) {
				console.log('Page is focused');
				socket?.emit('isOnline', { "isOnline": true }); // Assuming you want to emit true when page is focused
			} else {
				console.log('Page is unfocused');
				socket?.emit('isOnline', { "isOnline": false });
			}
		};

		// Add event listener
		document.addEventListener('visibilitychange', handleVisibilityChange);

		// Remove event listener on cleanup
		return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
	}, [socket]); // Added socket to the dependency array if its state might change over time


	const startChat = () => {
		setStarted(!started);
	};

	const sendButtonClick = () => {
		let messageObj = {
			message_text: msg,
			from_customer: true,
			chat_id: chat.id,
			created_at: new Date()
		}
		socket.emit('sendMessage', messageObj);
		setMsg("")
	}

	useEffect(() => {
		if (chat?.id) {
			setMessages([...messages, { id: 1, message_text: `Connected with ${chat?.department?.name} Department`, sender: "bot" },
			{ id: 2, message_text: `Hi ${chat?.customer?.name}, How Can I help you? `, sender: "bot" }
			]);
		}
	}, [chat])

	const endChat = (chatId) => {
		apiService.endChat(chatId).then((res) => {

		})
	}

	return (
		<div className="chatbot-logo h-screen bg-gray-100 p-4">
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
						<span
							className={`text-sm ${isOnline
								? "text-green-500"
								: "text-gray-400"
								}`}
						>
							{isOnline ? "Online" : "Offline"}
						</span>
						{chat?.id && <button className="border rounded-md p-2" onClick={() => endChat(chat?.id)}>End Chat</button>}
					</div>

					<div className="overflow-y-auto">

						{!chat?.id ?
							<WelcomeScreen setChat={setChat} /> : <>
								{messages?.map((msg) => (
									<Message text={msg.message_text} from_customer={msg.from_customer} />
								))}
							</>}

					</div>
					{chat?.id &&
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
					}
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
