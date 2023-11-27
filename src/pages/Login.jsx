import axios from 'axios';
import '../assets/css/index.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({}); 
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passError, setPassError] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkCookie = (User) => {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(User + '=')) {
          return true;  
        }
      }
      return false;
    }

    const cookiesExist = checkCookie('User');
    if (cookiesExist) {
      navigate('/dashboard');
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (email.length <= 0) {
        errors.email = "Please provide an email";
    }
    if (password.length <= 0) {
        errors.password = "Please provide your password";
    }

    if (Object.keys(errors).length > 0) {
      console.error(errors);
      return;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    try {
      const response = await axios.post('http://localhost:3001/login', 
        { email, password }
      );
      // const response = await axios.post('http://localhost:5000/login', { email, password }, { headers });
      setUser(response.data.user);
        
      if (response.status === 200) {
        const userName = response.data.user.name
        const setCookie = (name, value, days) => {
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration time
          const expires = 'expires=' + date.toUTCString();
          document.cookie = name + '=' + encodeURIComponent(userName) + ';' + expires + ';path=/';
        }
        setCookie('User', user, 30);
        navigate('/dashboard');
      }else{
        const data = await response.json();
        setPassError(data.error);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setPassError(err.response.data .error)
      } else {
          setPassError("An error occured during the process");
      }
    }
    finally{
      setLoading(false)
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
    
  return (
    <div className="">
      <div className='App-body' >
        <div className='body-left'>
        </div>
        
        <div className='body-right'>
          <div className='right-content'>
            <div className='header'>
              <h3>Welcome</h3><br/>
              <small>Enter details to login</small>
            </div>
            <div className='input'>
              {passError && <div className="error">{passError}</div>}
              <form onSubmit={handleSubmit}>
                <div>
                  <input autoComplete="false" placeholder='Email' name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                  <input autoComplete="false"  className='password-input'
                    type="password"
                    value={password} 
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='forgetPass'>
                  <a href="/forgot-password" className="">Forgot Password?</a>
                </div>
                <div className='submitBtn'>
                  <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Log In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;