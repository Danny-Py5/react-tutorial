import { useState } from "react";

export function RegisterUser() {
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
