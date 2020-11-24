import ProfileConsumption from "./ProfileConsumption";
import ProfileHistory from "./ProfileHistory";
import ProfileStatistics from "./ProfileStatistics";

export default function Profile({ history }) {
  const gallons = Object.values(history).reduce(
    (total, current) => total + current
  );

  return (
    <div>
      <ProfileConsumption gallons={gallons} />
      <ProfileStatistics gallons={gallons} />
      <ProfileHistory history={history} />
    </div>
  );
}
