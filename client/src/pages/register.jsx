import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    try {
      const { data } = await axios.post('/register', { name, email, password });

      if (data.error) {
        toast.error(data.error); // Display error message
      } else {
        setFormData({ name: '', email: '', password: '' }); // Reset form
        toast.success('Registered successfully!'); // Success toast
        navigate('/login'); // Navigate to login page
      }
    } catch (error) {
      console.error('Error registering user:', error);
      toast.error('An error occurred during registration.'); // General error toast
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Username"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
