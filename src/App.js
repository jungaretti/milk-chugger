import "./App.css";
import Profile from "./components/Profile";

const history = {};
history[new Date()] = 56;

function App() {
  return <Profile username={"buckybadger"} history={history} />;
}

export default App;
