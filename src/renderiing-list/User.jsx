import { UserDetails } from "./UserDetails.jsx";

export function User() {
  const mockUser = [
    {
      id: 1,
      name: "Daniel Olatunde",
      email: "daniel@example.com",
    },
    {
      id: 2,
      name: "Kemisola Bright",
      email: "kemisola@example.com",
    },
  ];
  return (
    <>
      {mockUser.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </>
  );
}
