export default function Leaderboard({ title, data }) {
  return (
    <div>
      <p>{title}</p>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
