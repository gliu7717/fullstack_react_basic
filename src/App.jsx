const App = () => {
  const userName = "Alice";

  const greetUser = (name) => `Hello, ${name}!`;

  const userInfo = { age: 25, location: "New York" };

  // Inline style object
  const titleStyle = {
    color: "blue",
    fontSize: "24px",
    textAlign: "center",
    margin: "20px 0",
  };

  return (
    <div>
      {/* Passing strings with quotes */}
      <img src='images/nature.jpg' alt='Nature' width='300' />

      {/* Referencing a JavaScript variable */}
      <p>Your name is: {userName}</p>

      {/* Calling a JavaScript function */}
      <p>Greeting: {greetUser(userName)}</p>

      {/* Using a JavaScript object */}
      <p>
        Age: {userInfo.age}, Location: {userInfo.location}
      </p>

      <h1 style={titleStyle}>Welcome to React!</h1>
    </div>
  );
};

// Export the App component
export default App;
