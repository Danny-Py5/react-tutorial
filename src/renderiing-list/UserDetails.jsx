export function UserDetails({ user }) {
  return (
    //   add key to remove errors that might happen unexpectedly
    <div key={user.id}>
      <b>User ID:</b>
      <span>{user.id}</span> <br />
      <b>User Name:</b> <span>{user.name}</span> <br />
      <b>User Email:</b> <span>{user.email}</span> <hr />
    </div>
  );
}
