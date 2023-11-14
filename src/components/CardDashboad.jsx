import React from 'react';
import { FiUsers, FiUserCheck, FiFileText, FiDatabase  } from "react-icons/fi";


const CardDashboad = (props) => {
    const {userData} = props;

    return (
        <div className='card-list'>
            <div className="card-content">
                <div className='icon'>
                    <FiUsers className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Investors</b></h4>
                    <h1>{userData ? userData.length : "..."}</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon2'>
                    <FiUserCheck className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Active Investors</b></h4>
                    <h1>56</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon3'>
                    <FiFileText className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Inactive Investors</b></h4>
                    <h1>67</h1>
                </div>
            </div>
            <div className="card-content">
                <div className='icon4'>
                    <FiDatabase className='_icon' />
                </div>
                <div className="card-title">
                    <h4><b>Active Projects</b></h4>
                    <h1>4</h1>
                </div>
            </div>
        </div>
    )
}

export default CardDashboad;