import { useState } from "react";
import { useEffect } from "react";

export function RegisterUser() {
  useEffect(() => {
    // custom hook to handle window resize event
    console.log("Component mounted");
    console.log("Window resized event added");
    const resizeEventHandler = () => {
      document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      console.log("Window resized");
    };

    window.addEventListener("resize", resizeEventHandler);

    return () => {
      console.log(
        "%cCleanup function called",
        "color: yellow; font-size: 20px; font-weight: bold;"
      );
      console.log("%cWindow resized event removed", "color: red;");
      window.removeEventListener("resize", resizeEventHandler);
    };
  }, []); // make sure it runs only once when the component mounts

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const isDisabled = !userName || !password || !displayName;
  return (
    <form>
      <div>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div>
        <div>
          <span>
            User Name: <span>{userName}</span>
          </span>
        </div>
        <div>
          <span>
            Password: <span>{password}</span>
          </span>
        </div>
        <div>
          <span>
            Display Name: <span>{displayName}</span>
          </span>
        </div>
      </div>

      <button disabled={isDisabled}>Submit</button>
    </form>
  );
}
