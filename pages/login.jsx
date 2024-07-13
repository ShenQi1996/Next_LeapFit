import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/store';
import { useRouter } from 'next/router';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();


  const handleLogin = () => {
    // In a real app, you would make an API call to validate the login.
    // Here, we're just simulating a successful login.
    const user = { username: "test@gmail.com", firstName: "sam", lastName: "Qi", dateOfBirth: null, appointmentDate: null, appointmentTime: null };
    dispatch(setUser(user));
    router.push('/about');
  };
  

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;

