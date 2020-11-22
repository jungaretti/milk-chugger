export default function Leaderboard({ title, data }) {
  return (
    <div>
      <p>{title}</p>
      {Object.entries(data).map(([key, value]) => (
        <p>
          {key}: {value}
        </p>
      ))}
    </div>
  );
}
