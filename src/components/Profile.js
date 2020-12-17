import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function DeleteButton({ onDelete }) {
  return (
    <Button variant="primary" onClick={onDelete}>
      Delete
    </Button>
  );
}

export default function Profile({
  email,
  name,
  state,
  milks,
  drinkMilks,
  deleteMilk,
}) {
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
              milks.docs.map((milkDoc) => (
                <tr key={milkDoc.id}>
                  <td>{milkDoc.data().time?.toDate().toLocaleString()}</td>
                  <td>{milkDoc.data().gallons}</td>
                  <td>
                    <DeleteButton onDelete={() => deleteMilk(milkDoc.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
