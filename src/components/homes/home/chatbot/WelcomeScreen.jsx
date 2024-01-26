import UserInfo from "./UserInfo";

const WelcomeScreen = ({setChat}) => {
  const messages = [
    {
      id: 1,
      text: "Hi! Welcome to Amez Cloud Virtual Assistant..",
      sender: "bot",
    }
  ];

  return (
    <>
      {messages.map((msg) => (
        <div className="message-container">
          <div>{msg.text}</div>
        </div>
      ))}
      <UserInfo setChat={setChat}/>
    </>
  );
};

export default WelcomeScreen;
