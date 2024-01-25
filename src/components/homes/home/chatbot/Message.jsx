const Message = ({ text, sender }) => {
    const isUser = sender === 'user';
    const messageClass = isUser ? 'user-msg' : 'bg-gray-300';

    return (
        <div className={`message-container ${messageClass}`}>
            <div>{text}</div>
        </div>
    );
};

export default Message;
