const GoogleComponent = () => {
  const containerStyle = {
    color: '#4285F4', // Google Blue
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    margin: '20px',
  };

  const paragraphStyle = {
    color: '#34A853', // Google Green
    fontSize: '1.2rem',
  };
  
  return (
    <div style={containerStyle}>
      <h1>Google</h1>
      <p
      style={paragraphStyle}
      >
        Organizing the world&apos;s information.
      </p>  
    </div>
  );
}

export default GoogleComponent;