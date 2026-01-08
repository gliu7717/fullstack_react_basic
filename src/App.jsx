import CarList from "./components/CarList";

const App = () => {
  return (
    <div>
      <h1>Welcome to the Car Showroom!</h1>
      <CarList make='Tesla' />
    </div>
  );
};

// Export the App component
export default App;
