import { useState } from "react";

export function RegisterUserState2() {
  const [formFields, setFormFields] = useState({
    userName: "",
    password: "",
    displayName: "",
  });

  return (
    <form>
      <div>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          placeholder="User Name"
          value={formFields.userName}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              userName: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          placeholder="Display Name"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <div>
          <span>
            User Name: <span>{formFields.userName}</span>
          </span>
        </div>
        <div>
          <span>
            Password: <span>{formFields.password}</span>
          </span>
        </div>
        <div>
          <span>
            Display Name: <span>{formFields.displayName}</span>
          </span>
        </div>
      </div>
    </form>
  );
}
