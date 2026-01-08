import React from "react";
import ReactDOM from "react-dom/client";

//Define an App component
// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return <h1>React is fun!</h1>;
};

//Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render App into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
