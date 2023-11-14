import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { fetchData } from '../axios/apiService';
import DetailBody from "../components/DetailBody";
import BodyContent from '../components/BodyContent'
// import SidebarUser from '../components/SidebarUser';

const UserDetails = () => {
  const [ userData, setUserData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
      const getData = async () => {
          const responseData = await fetchData();
          setUserData(responseData);
          setLoading(false)
      };

      getData();
  }, []); 

  return (
      <section>
          <Nav />

          <div className="layout has-sidebar fixed-sidebar fixed-header">
            <Sidebar />
            <div id="overlay" className="overlay"></div>
            <DetailBody userData={userData} />
          </div>
      </section>
  );
}

export default UserDetails;