export default function ProfileHistory({ history }) {
  const entries = Object.entries(history);

  return (
    <div>
      <p>Consumption history</p>
      <ul>
        {entries.map(([date, gallons]) => (
          <li key={date}>
            {date}: {gallons} gallons
          </li>
        ))}
      </ul>
    </div>
  );
}
