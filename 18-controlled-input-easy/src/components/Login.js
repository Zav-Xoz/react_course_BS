import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handelFormSubmit(event) {
    event.preventDefault();

    const userData = {
      // username: username,
      username,
      // password: password,
      password,
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
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
