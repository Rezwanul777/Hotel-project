import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../../redux/features/auth/authApi';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate=useNavigate();

  const handleLogin =  async(e) => {
    e.preventDefault();
    const data={
      email,
      password
    }
    try {
      const response=await loginUser(data).unwrap();
      const {user,token}=response;
      //console.log(response);
      toast.success('Login successful!');
        navigate('/')
      
    } catch (error) {
      
      
      toast.error("Please provide a valid email and password!");
    }
    
  }

  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h2 className='text-2xl font-semibold pt-5'>Please login</h2>
      <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
         className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        
        placeholder="Email" required />

        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        placeholder="Password" required />
        {
          message && <p className="text-red-500">{message}</p>  // Display error message if any
        }
        <button type="submit" disabled={loginLoading}
         className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'
        >Login</button>
      </form>
     
        <p className='my-5 text-center'>Don't have an account? 
          <Link to="/register" className='text-red-700 italic'> Register </Link> here.
        </p>
    </div>
  )
}

export default Login