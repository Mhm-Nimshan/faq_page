const Message = ({ text, from_customer }) => {
    const messageClass = from_customer ? 'user-msg' : 'bg-gray-300';

    return (
        <div className={`message-container ${messageClass}`}>
            <div>{text}</div>
        </div>
    );
};

export default Message;
