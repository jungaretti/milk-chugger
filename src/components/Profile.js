export default function Profile({ email, name, state, milks }) {
  return (
    <div>
      <div>
        <h3>Profile</h3>
        <p>{email}</p>
        <p>{name}</p>
        <p>{state}</p>
      </div>
      <div>
        <h3>History</h3>
        {milks &&
          milks.map((milk) => (
            <p>Date: {milk.date.toDate().toLocaleString()}</p>
          ))}
      </div>
    </div>
  );
}
