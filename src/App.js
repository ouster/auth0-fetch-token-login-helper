import {useAuth0} from "@auth0/auth0-react";

function App() {
    const {isLoading, isAuthenticated, loginWithRedirect, loginWithPopup, logout, user} = useAuth0();

    const signIn = () => {
        loginWithPopup({
            redirectUri: `http://localhost:3000`,
        });
    };

    const logOutHandler = () => {
        logout({
            returnTo: `http://localhost:3000`,
        });
    };


    if (isLoading) {
        return <div className="App">
            <b>Loading...</b>
        </div>
    } else
        return (
            <div className="App">
                {!isAuthenticated ? <button onClick={signIn}>Login</button> : <b>{user.name}</b>}
                <br/>
                <button onClick={logOutHandler}>Logout</button>
                <br/>
                {isAuthenticated ? "Logged in" : "not logged in"}
            </div>
        );
}

export default App;
