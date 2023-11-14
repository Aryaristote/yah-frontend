import Nav from '../components/Nav'
import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar'
import { useNavigate } from 'react-router-dom';
import BodyContent from '../components/BodyContent'

const Home = () => {
  const navigate = useNavigate();

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

    const cookiesExist = checkCookie('User')
    if (!cookiesExist) {
      navigate('/login');
    }
  }, []);

  return (
    <section>
        <Nav />
        <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>
            <BodyContent />
        </div>
    </section>
  );
};

export default Home;