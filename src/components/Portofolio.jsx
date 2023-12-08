import { React, useState, useEffect } from 'react';
import CardDashboad from './CardDashboad'
import PortofolioBlock from './PortofolioBlock'
import { fetchData } from '../axios/apiService';

const USER_STATUS = ['Pending', 'Blacklisted', 'Active', 'Inactive'];
const getUserStatus = () => {
    const idx = Math.floor(Math.random() * USER_STATUS.length - 1);
    return USER_STATUS[idx < 0 ? (idx * -1) : idx];
}
const formatUserData = (data) => {
    return data.map((item) => {
        return {
            ...item,
            jobStatus: getUserStatus(),
        }
    })
}

const Portofolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
        const responseData = await fetchData();

        if (responseData !== null) {
            const formatted = formatUserData(responseData);
            setData(formatted);
            setLoading(false);
        }
    };

    getData();
  }, []);

  return (
    <div className='details-body'>
        <div className="body-content"> 
          <div className='up-block'>
              <div>
                  <h1 className='title'>Portofolios</h1>
                  <div className="card-upBtn">
                    {/* Btn  */}
                  </div>
              </div>
              <CardDashboad userData={data}/>
          </div>

          <div>
            <PortofolioBlock />
          </div>
        </div>
    </div>
  )
}

export default Portofolio
