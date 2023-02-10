import { useState } from 'react';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [data, setData] = useState({ username: '', password: '' });

  function handelFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(text, name) {
    setData({ ...data, [name]: text.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handelFormSubmit}>
        <label>
          Username :
          <input
            type="text"
            value={data.username}
            placeholder="Username"
            onChange={(event) => handleInputChange(event, 'username')}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            value={data.password}
            placeholder="Password"
            onChange={(event) => handleInputChange(event, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
