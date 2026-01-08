const SpeedMessage = ({ speed }) => {
  const speedLimit = 50;
  
  // Determine the message based on the speed
  const message = speed <= speedLimit ? (
    <p>Your speed is okay.</p>
  ) : (
    <p>You are going too fast!</p>
  );

  // Determine background color based on speed
  const backgroundColor = speed <= speedLimit
    ? "#90ee90" // Light green for within the limit
    : "#f08080"; // Light red for exceeding the limit
  
  // Define consistent message styling
  const messageStyle = {
    backgroundColor,
    color: "#333", // Dark text for good readability
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };
  
  return (
    <div style={messageStyle}>
      <p>Your speed is: {speed} mph.</p>
      {message}
    </div>
  );
};

export default SpeedMessage;