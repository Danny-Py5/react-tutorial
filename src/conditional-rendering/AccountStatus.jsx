export default function AccountStatus() {
  // AUTHENTICATED | NOT_AUTHENTICATED | DISABLED

  const accountStatus = "DISABLED";

  if (accountStatus === "AUTHENTICATED") {
    return (
      <div>
        <span>
          Your Account has been
          <b> Authenicated, </b>press this button to visit the dashboard
        </span>
      </div>
    );
  } else if (accountStatus === "NOT_AUTHENTICATED") {
    return (
      <div>
        <span>
          You account has not been authenticated, please
          <a href="#">follow this link</a> to be authenticated
        </span>
      </div>
    );
  } else if (accountStatus === "DISABLED") {
    return (
      <div>
        <span>
          Your account has been <b>disabled</b>, please <em>enable it</em> by
          <a href="#"> following this link</a>
        </span>
      </div>
    );
  }
}
