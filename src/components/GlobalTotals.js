import Leaderboard from "./Leaderboard";

export default function GlobalTotals({ gallons, regions, users }) {
  return (
    <div>
      <p>{gallons} gallons worldwide</p>
      <Leaderboard title="Regional Leaderboard" data={regions} />
      <Leaderboard title="User Leaderboard" data={users} />
    </div>
  );
}
