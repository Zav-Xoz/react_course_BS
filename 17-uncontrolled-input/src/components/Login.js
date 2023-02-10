function Login() {
  function handelFormSubmit(event) {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username :
          <input type="text" name="username" placeholder="Username" />
        </label>
        <label>
          Password :
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
