import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function DeleteButton() {
  return (
    <Button
      variant="primary"
      onClick={() => console.log(`Should delete document ${"hello"}`)}
    >
      Delete
    </Button>
  );
}

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
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Gallons</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {milks &&
              milks.map((milk) => (
                <tr>
                  <td>{milk.time?.toDate().toLocaleString()}</td>
                  <td>{milk.gallons}</td>
                  <td>
                    <DeleteButton />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
