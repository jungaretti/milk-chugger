export default function Profile({ email, name, state }) {
  return (
    <div>
      <h3>Profile</h3>
      <p>{email}</p>
      <p>{name}</p>
      <p>{state}</p>
    </div>
  );
}
