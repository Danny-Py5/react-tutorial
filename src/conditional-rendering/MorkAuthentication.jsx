export default function MorkAuthentication() {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome User!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ color: "firebrick" }}>
          You are not Logged in, you can't access this website.
        </h1>
      </div>
    );
  }
}
