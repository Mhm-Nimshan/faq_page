import { useState, useEffect } from 'react';

const useChatState = () => {
    // Initialize state with a function to ensure localStorage is only called in the browser
    const [chat, setChat] = useState(() => {
        if (typeof window === 'object') {
            // We are in the browser, safe to use localStorage
            const storedChat = localStorage.getItem('chat');
            return storedChat ? JSON.parse(storedChat) : {
                id: null,
                customer: null,
                department: null,
                representative: null
            };
        }
        // Default value if not in the browser (e.g., during server-side rendering)
        return {
            id: null,
            customer: null,
            department: null,
            representative: null
        };
    });

    // Update localStorage when chat changes
    useEffect(() => {
        if (chat && typeof window === 'object') {
            localStorage.setItem('chat', JSON.stringify(chat));
        }
    }, [chat]);

    return [chat, setChat];
};

export default useChatState;
