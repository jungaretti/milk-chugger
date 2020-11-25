import Leaderboard from "./Leaderboard";
import { Alert } from 'react-bootstrap';

export default function GlobalTotals({ gallons, regions, users }) {
  return (
    <div>
       <Alert variant="secondary">{gallons} gallons worldwide</Alert>
      <Leaderboard title="Regional Leaderboard" data={regions} />
      <Leaderboard title="User Leaderboard" data={users} />
    </div>
  );
}
