import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [token, setToken] = useState(null)

  const saveToken = (value) => {
    const tokenNonEmptyIsString = typeof value === "string" && value.length > 0
    if(tokenNonEmptyIsString) {
      setToken(value)
    }
  }

  const logout = () => {
    setToken(null)
  }

  const tokenExists = token && token.length > 0
  const AppContent = tokenExists
    ? <Dashboard token={token} logout={logout} />
    : <div>
      <RegistrationForm />
      <div className="gap"></div>
      <LoginForm saveToken={saveToken} />
    </div>

  return (
    <div className="App">
      {AppContent}
    </div>
  );
}

export default App;
