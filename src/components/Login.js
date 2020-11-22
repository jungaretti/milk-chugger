import { Button } from "react-bootstrap";

import firebase from "firebase/app";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login({}) {
  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div>
      {user ? (
        <p>Hello {user.email}</p>
      ) : (
        <div>
          <Button variant="primary">Sign in with Google</Button>{" "}
        </div>
      )}
    </div>
  );
}
