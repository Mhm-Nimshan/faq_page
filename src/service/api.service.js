import axios from "axios";

const apiService = {

	getAllDepartments: async () => {
		try {
			const response = await axios.get('http://localhost:3001/api/department/all',{ withCredentials: true });
			console.log(response);
			if (!response.data) {
				throw new Error('Login failed');
			}

			return response.data;
		} catch (error) {
			console.error('Login Error:', error);
			return error;
		}
	},

	createCustomer: async (data) => {
		try {
			const response = await axios.post('http://localhost:3001/api/customer/create', data, { withCredentials: true });
			console.log(response);
			if (!response.data) {
				throw new Error('Login failed');
			}

			return response.data;
		} catch (error) {
			console.error('Login Error:', error);
			return error;
		}
	},

	getMessagesByChatId: async (chatId) => {
          try {
			const response = await axios.get(`http://localhost:3001/api/chats/messages/${chatId}`, { withCredentials: true });
			console.log(response);
			if (!response.data) {
				throw new Error('Login failed');
			}

			return response.data;
		} catch (error) {
			console.error('Login Error:', error);
			return error;
		}
	},

	endChat: async (chatId) => {
		try {
			const response = await axios.put(`http://localhost:3001/api/users/endchat/${chatId}`, { withCredentials: true });
			console.log(response);
			if (!response.data) {
				throw new Error('Login failed');
			}

			return response.data;
		} catch (error) {
			console.error('Login Error:', error);
			return error;
		}
	}

}

export default apiService;