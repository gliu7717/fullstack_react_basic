// Reusable ColorfulComponent
const ColorfulComponent = (props) => (
  <div style={{ color: props.color || "blue" }}>
    <p>This component is {props.color || "blue"}.</p>
    {props.children}
  </div>
);
// Reusable UserProfile Component
const UserProfile = (props) => (
  <div>
    <h1>Name: {props.name}</h1>
    <p>Date of Birth: {props.dateOfBirth}</p>
    <p>Company: {props.company}</p>
    <p>University: {props.university}</p>
  </div>
);

const App = () => {
  const color1 = "blue";
  const color2 = "green";
  const userDetails = {
    name: "Mark Zuckerberg",
    dateOfBirth: "1984-05-14",
    company: "Meta (formerly Facebook)",
    university: "Harvard University",
  };
  return (
    <div>
      <ColorfulComponent color={color1}>
        <p>Blue is considered a calming color for the eyes.</p>
      </ColorfulComponent>
      <ColorfulComponent color={color2}>
        <p>Green symbolizes nature, renewal, and energy.</p>
      </ColorfulComponent>
      <UserProfile {...userDetails} />
    </div>
  );
};

// Export the App component
export default App;
