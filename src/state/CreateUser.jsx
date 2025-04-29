import { useState } from "react";

export function CreateUser({ setUsers }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(5);

  return (
    <form
      className="user"
      onSubmit={(e) => {
        e.preventDefault();
        if (username && email) {
          const createdUser = { username, email, id: userId };
          setUsers((currentUsers) => {
            return [...currentUsers, createdUser];
          });
          setUsername("");
          setEmail("");
          setUserId((prevId) => prevId + 1);
        }
      }}
    >
      <div>
        <label htmlFor="username" id="username">
          User Name
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email" id="email">
          Email
        </label>
        <input
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">Create User</button>
      </div>
    </form>
  );
}
