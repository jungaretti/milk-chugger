import { Button } from "react-bootstrap";

import { useObject } from "react-firebase-hooks/database";

export default function Add({ uid, database }) {
  const [value, loading, error] = useObject(database.ref(`gallons/${uid}`));
  const gallons = value?.val() ?? 0;

  function addMilk() {
    database.ref(`gallons/${uid}`).set(gallons + 1);
  }

  return (
    <div>
      <p>{gallons} gallons logged</p>
      <Button onClick={addMilk}>Add one milk</Button>
    </div>
  );
}
