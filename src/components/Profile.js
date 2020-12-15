import Button from "react-bootstrap/Button";

export default function Profile({ email, name, state, milks, drinkMilks }) {
  return (
    <div>
      <div>
        <h3>Drink</h3>
        <Button variant="primary" onClick={() => drinkMilks(1)}>
          Chug One!
        </Button>
      </div>
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
            <p>
              Date: {milk.time?.toDate().toLocaleString()}, gallons:{" "}
              {milk.gallons}
            </p>
          ))}
      </div>
    </div>
  );
}
