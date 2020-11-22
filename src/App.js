import "./App.css";
import GlobalTotals from "./components/GlobalTotals";

const regions = {};
regions["Wisconsin"] = 56;

const users = {};
users["BadgerGranda"] = 56;

function App() {
  return <GlobalTotals gallons={56} regions={regions} users={users} />;
}

export default App;
