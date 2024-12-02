import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() { 
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            const { data: response } = await axios.post('/login', { email, password });

            if (response.error) {
                toast.error(response.error);
            } else {
                setData({ email: '', password: '' }); // Clear the form
                toast.success('Logged in successfully');
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error('An error occurred while logging in.');
        }
    };

    return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={data.email} 
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={data.password} 
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
