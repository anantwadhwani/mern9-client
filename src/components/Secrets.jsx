import React, { useEffect, useState } from 'react';
import { getSecrets, addSecret, logout } from '../Api';

const Secrets = ({ onLogout }) => {
    const [secrets, setSecrets] = useState([]);
    const [secret, setSecret] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        async function fetchSecrets() {
            const res = await getSecrets();
            if (res.secrets) setSecrets(res.secrets);
            else setMsg('Session expired. Please login.');
        }
        fetchSecrets();
    }, []);

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!secret.trim()) return;
        const res = await addSecret(secret);
        if (res.secrets) {
            setSecrets(res.secrets);
            setSecret('');
        } else {
            setMsg('Failed to add secret');
        }
    };

    const handleLogout = async () => {
        await logout();
        onLogout();
    };

    return (
        <div>
            <h2>Your Secrets</h2>
            <form onSubmit={handleAdd}>
                <input value={secret} onChange={e => setSecret(e.target.value)}
                    placeholder="Add a secret" required />
                <button type="submit">Add</button>
            </form>
            <ul>
                {secrets.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <button onClick={handleLogout}>Logout</button>
            <div>{msg}</div>
        </div>
    );
}

export default Secrets;