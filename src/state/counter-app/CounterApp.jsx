import { useState } from "react";

export default function CounterApp() {
  let [ballCount, setBallCount] = useState(0);

  const increaseLimit = ballCount >= 10 ? true : false;
  const decreaseLimit = ballCount <= 0 ? true : false;

  return (
    <div>
      <h1>Counter App</h1>
      <p>
        How many Balls do you like?
        <span style={{ color: "#898", backgroundColor: "#88998822" }}>
          Increase and decrease to your choice{" "}
          <b>but you can only choose 10 balls</b>
        </span>
      </p>

      <p>You choose to go for {ballCount} balls</p>

      <div>
        <button
          disabled={increaseLimit}
          onClick={() => {
            setBallCount(ballCount + 1);
          }}
          className="increase"
        >
          Increase
        </button>
        <button
          disabled={decreaseLimit}
          className="decrease"
          onClick={() => {
            ballCount >= 1 ? setBallCount(ballCount - 1) : "";
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}
