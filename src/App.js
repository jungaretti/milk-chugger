import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import GlobalTotals from "./components/GlobalTotals";

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
  const [user, userLoading] = useAuthState(firebase.auth());

  const profileRef = firebase.firestore().doc(`users/${user?.uid}`);
  const [profile] = useDocumentData(profileRef);

  const milksRef = firebase.firestore().collection("milks");
  const milksQuery = milksRef.where("drinker", "==", user ? user.uid : null);
  const [milks] = useCollection(milksQuery);

  function createMilk(gallons) {
    milksRef.add({
      drinker: user.uid,
      gallons: gallons,
      time: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }

  function deleteMilk(id) {
    milksRef.doc(id).delete();
  }

  return (
    <div>
      <Router>
        <NavBar
          logInWithGoogle={logInWithGoogle}
          signOut={signOut}
          user={user}
        />
        <Switch>
          <Route path="/profile">
            {user && (
              <Profile
                email={user.email}
                name={profile?.name}
                state={profile?.state}
                milks={milks}
                createMilk={createMilk}
                deleteMilk={deleteMilk}
              />
            )}
          </Route>
          <Route path="/">
            <GlobalTotals gallons={56} regions={regions} users={users} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
