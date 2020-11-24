import ProfileConsumption from "./ProfileConsumption";
import ProfileHistory from "./ProfileHistory";
import ProfileStatistics from "./ProfileStatistics";

import { useObject } from "react-firebase-hooks/database";

export default function Profile({ uid, database }) {
  const [value, loading, error] = useObject(database.ref(`gallons/${uid}`));
  const gallons = value?.val() ?? 0;

  return (
    <div>
      <ProfileConsumption gallons={gallons} />
      <ProfileStatistics gallons={gallons} />
      {/* <ProfileHistory history={history} /> */}
    </div>
  );
}
