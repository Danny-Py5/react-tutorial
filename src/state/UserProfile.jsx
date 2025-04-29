import { useState } from "react";
import styles from "./styles.module.css";

export default function UserProfile({ user, setUsers }) {
  // console.log(setUsers);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [isExiting, setIsExiting] = useState(false);
  // console.log(isEditing);

  const toggleIsEditing = () => setIsEditing((currentState) => !currentState);

  const saveUpdates = () => {
    toggleIsEditing();
    setUsers((currentUsers) => {
      return currentUsers.map((currentUser) => {
        if (currentUser.id === user.id) {
          return {
            ...currentUser,
            email: email,
            username: username,
          };
        }
        return currentUser;
      });
    });
  };

  const deleteUser = () => {
    setIsExiting(true);
    setTimeout(() => {
      setUsers((currentUsers) => {
        return currentUsers.filter((currentUser) => {
          return currentUser.id !== user.id;
        });
      });
    }, 300);
  };

  return (
    <div className={`user ${isExiting ? "user-exit" : ""}`}>
      {/* button to edit and delete user */}

      <div>
        <button onClick={toggleIsEditing}>Edit</button>
        <button onClick={deleteUser}>Delete</button>
      </div>
      {/*  user profile details */}
      <div>
        <p className={styles.normalize}>ID: {user.id}</p>

        <p className={styles.normalize}>
          User Name:{" "}
          {isEditing ? (
            <input
              className={styles.normalize}
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          ) : (
            user.username
          )}
        </p>

        <p className={styles.normalize}>
          Email:{" "}
          {isEditing ? (
            <span>
              <input
                className={styles.normalize}
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={saveUpdates}>Save</button>
            </span>
          ) : (
            user.email
          )}
        </p>
      </div>
    </div>
  );
}
