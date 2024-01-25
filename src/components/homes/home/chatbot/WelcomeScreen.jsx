const WelcomeScreen = ({selectDept}) => {
  const messages = [
    {
      id: 1,
      text: "Hi! Welcome to Amez Cloud Virtual Assistant..",
      sender: "bot",
    },
    { id: 2, text: "Please Select the Department to Connect", sender: "bot" },
  ];

  const buttons = ["Sales", "Technical", "Integration"];

  return (
    <>
      {messages.map((msg) => (
        <div className="message-container">
          <div>{msg.text}</div>
        </div>
      ))}
      <div className="department-button">
        {buttons.map((btn) => (
          <button className="dept-btn-green" onClick={() => {
					  selectDept(btn)
		
		}}>{btn}</button>
        ))}
      </div>
    </>
  );
};

export default WelcomeScreen;
