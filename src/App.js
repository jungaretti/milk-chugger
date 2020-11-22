import "./App.css";
import GlobalTotals from "./components/GlobalTotals";

const regions = {};
regions["Wisconsin"] = 56;

const users = {};
users["BadgerGranda"] = 56;

import firebase from "firebase/app";
import "firebase/auth";

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

function App() {
  return <GlobalTotals gallons={56} regions={regions} users={users} />;
}

export default App;
