import { useEffect, useState } from "react";

export default function DisplayUserName({ userName }) {
  const [timePassed, setTimePassed] = useState(false);

  // we murk that we are fetching data that may take time.
  useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 3000);
  }, []);
  return (
    <div>
      <span>{timePassed && userName}</span>
    </div>
  );
}
