import { useState } from "react";

export function PostUser() {
  const [user, setUser] = useState({
    title: "",
    body: "",
  });

  const sendUser = async (user) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user, id: Math.floor(Math.random() * 1000) }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendUser(user);

          console.log(user);
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) =>
              setUser((currentUser) => ({
                ...currentUser,
                title: e.target.value,
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="title">Body</label>
          <input
            type="text"
            name="body"
            id="body"
            onChange={(e) =>
              setUser((currentUser) => ({
                ...currentUser,
                body: e.target.value,
              }))
            }
          />
        </div>
        <button>Create User now!</button>
      </form>
    </div>
  );
}
