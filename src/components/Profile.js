import Button from "react-bootstrap/Button";
import ProfileConsumption from "./ProfileConsumption";
import ProfileHistory from "./ProfileHistory";
import ProfileStatistics from "./ProfileStatistics";

export default function Profile({ history, username }) {
  const gallons = Object.values(history).reduce(
    (total, current) => total + current
  );

  return (
    <div>
      <Button variant="primary">Primary</Button>
      <div>
        <p>Hello, {username}</p>
      </div>
      <ProfileConsumption gallons={gallons} />
      <ProfileStatistics gallons={gallons} />
      <ProfileHistory history={history} />
    </div>
  );
}
