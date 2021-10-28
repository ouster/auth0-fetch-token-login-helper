import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const signIn = () => {
    loginWithRedirect({
      redirectUri: `http://localhost:3001`,
    });
  };

  const logOutHandler = () => {
    logout({
      returnTo: `http://localhost:3001`,
    });
  };

  return (
    <div className="App">
      <button onClick={signIn}>Login</button>
      <button onClick={logOutHandler}>Logout</button>
      {isAuthenticated ? "Logged in" : "not logged in"}
    </div>
  );
}

export default App;
