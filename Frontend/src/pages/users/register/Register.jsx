import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../../redux/features/auth/authApi';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

   
    try {
      await registerUser(data).unwrap();
      toast.success("Registration successful");
      //refetch()
      navigate('/login');
    } catch (err) {
      toast.error("Registration failed");
    }
  };
  return (
    <div className="max-w-sm bg-white mx-auto p-8 mt-36">
      <h2 className="text-2xl font-semibold pt-5">Please Register</h2>
      <form onSubmit={handleRegister}
        
        className="space-y-5 max-w-sm mx-auto pt-8"
      >
        <input
          type="text"
          value={username}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          required
        />

        <input
          type="text"
          value={email}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          value={password}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {
          message && <p className="text-red-500">{message}</p> // Display error message if any
        }
        <button
          type="submit"
         
          className="w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md"
        >
          Register
        </button>
      </form>

      <p className="my-5 text-center">
        Already have an account? Please
        <Link to="/login" className="text-red-700 italic">
          {" "}
          Login
        </Link>
        
      </p>
    </div>
  )
}

export default Register