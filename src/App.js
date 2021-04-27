import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';

function App() {

  const user = null;

  // listener on user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged in
        console.log(userAuth);
      }else{
        //Logged out
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {/* If user is null, render to login. Else to the homescreen */}
        {!user? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
