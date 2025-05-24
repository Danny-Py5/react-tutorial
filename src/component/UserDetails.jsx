import { useState } from "react";

export default function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userNameInput, setUserNameInput] = useState(user.userName);
  //   const [user, setUser] = useState(user.user);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIsEditing((current) => !current);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          setUsers((currentUsers) =>
            currentUsers.filter((currentUser) => currentUser.id !== user.id)
          );
        }}
      >
        Delete
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={() => {
            setUsers((currentUsers) => {
              return currentUsers.map((currentUser) =>
                currentUser.id === user.id
                  ? { ...currentUser, userName: userNameInput }
                  : currentUser
              );
            });
            setIsEditing((current) => !current);
          }}
        >
          Update
        </button>
      )}
      <p>
        Id: <span>{user.id}</span>
      </p>
      <p>
        <b> Name: </b>
        <span>{user.name}</span>
      </p>
      <p>
        {isEditing ? (
          <label htmlFor="username">Username: </label>
        ) : (
          <b>Username: </b>
        )}
        {isEditing ? (
          <input
            id="username"
            aria-label="username"
            type="text"
            value={userNameInput}
            placeholder="Update your username"
            onChange={(e) => setUserNameInput(e.target.value)}
          />
        ) : (
          <span>{user.userName}</span>
        )}
      </p>
    </div>
  );
}
