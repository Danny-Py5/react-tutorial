export default function LoginForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("password"));
      }}
    >
      <label htmlFor="username">User Name</label> <br />
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="Input your User Name"
      />
      <br />
      <label htmlFor="password">User Name</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Input your password"
      />
      <br />
      <input type="submit" name="submit" id="submit" />
    </form>
  );
}
