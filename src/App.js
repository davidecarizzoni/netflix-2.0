import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // listener on user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // Logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //Logged out
        dispatch(logout);
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
