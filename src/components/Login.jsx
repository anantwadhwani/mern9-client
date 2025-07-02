import React, { useState } from 'react';
import { login } from '../Api';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await login(email, password);
        if (res.msg === 'Logged in') {
            setMsg('');
            onLogin();
        } else {
            setMsg(res.msg || 'Error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email}
                onChange={e => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password}
                onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            <div>{msg}</div>
        </form>
    );
}

export default Login;