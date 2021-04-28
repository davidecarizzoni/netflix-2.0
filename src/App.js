import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';


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
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])
  // This dependencies allow to redirect when user logout

  return (
    <div className="App">
      <Router>
        {/* If user is null, render to login. Else to the homescreen */}
        {!user? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>

            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
