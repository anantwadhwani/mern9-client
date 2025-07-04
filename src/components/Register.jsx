import React, { useState } from 'react';
import { register } from '../Api';

const Register = ({ onRegistered }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await register(email, password);
        if (res.msg === 'User registered') {
            setMsg('Registration successful! Please login.');
            onRegistered();
        } else {
            setMsg(res.msg || 'Error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="email" placeholder="Email" value={email}
                onChange={e => setEmail(e.target.value)} required />
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    {showPassword ? '🙈' : '👁️'}
                </button>
            </div>
            <button type="submit">Register</button>
            <div>{msg}</div>
        </form>
    );
}

export default Register;