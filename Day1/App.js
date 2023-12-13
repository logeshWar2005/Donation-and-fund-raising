import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import React,{useState} from 'react';
function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
          {showLogin ? (
            <SignIn toggleForm={toggleForm} />
          ) : (
            <SignUp toggleForm={toggleForm} />
          )}
    </div>
  );
}

export default App;
