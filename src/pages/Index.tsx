const Index = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#1a1a2e', 
      color: 'white', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          STDIOEAST
        </h1>
        
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: '2rem',
          color: '#e5e7eb'
        }}>
          Coming Soon...
        </h2>
        
        <p style={{ color: '#9ca3af' }}>
          Your site is working! This is a test version.
        </p>
      </div>
    </div>
  );
};

export default Index;
