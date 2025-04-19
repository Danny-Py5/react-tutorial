export function User({ name, age }) {
  return (
    // using react fragment shortcut
    <>
      <h1>This is the user details</h1>
      <p>
        User name: <b>{name}</b>
      </p>
      <p>
        User age: <b>{age}</b>
      </p>
    </>
  );
}
