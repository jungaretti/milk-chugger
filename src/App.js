import "./App.css";
import Log from "./components/Log";
import Profile from "./components/Profile";
import GlobalTotals from "./components/GlobalTotals";
import NavBar from "./components/NavBar";

import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const history = {};
history[new Date()] = 56;

const regions = {};
regions["Wisconsin"] = 56;
const users = {};
users["BadgerGranda"] = 56;

firebase.initializeApp({
  apiKey: "AIzaSyD1J0xsmgmBuebl2ijcKrDHY9SsdM2_9nw",
  authDomain: "milk-chugger.firebaseapp.com",
  databaseURL: "https://milk-chugger.firebaseio.com",
  projectId: "milk-chugger",
  storageBucket: "milk-chugger.appspot.com",
  messagingSenderId: "619120327033",
  appId: "1:619120327033:web:36b6fa731bfa5e5a7017a8",
  measurementId: "G-RY8LVPQ59F",
});

function logInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
}

function signOut() {
  firebase.auth().signOut();
}

function App() {
  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <Router>
      <div>
        <NavBar
          logInWithGoogle={logInWithGoogle}
          signOut={signOut}
          user={user}
        />
        <Switch>
          <Route path="/profile">
            <Profile username={"buckybadger"} history={history} />
          </Route>
          <Route path="/dashboard">
            <GlobalTotals gallons={56} regions={regions} users={users} />
          </Route>
          <Route path="/log">
            <Log gallons={4} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
