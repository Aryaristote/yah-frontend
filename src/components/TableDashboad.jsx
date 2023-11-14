import { React, useEffect, useState } from 'react';
import { BiDotsVerticalRounded, BiFilter } from "react-icons/bi"
import Filter from './Filter';
import userImg from '../assets/images/yah-user-img.png';
import { useNavigate } from 'react-router-dom';


const TableDashboad = (props) => {
    const [showFilter, setShowFilter] = useState(false);
    const {userData} = props;
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate('/user-details/'+id);
    }

    return (
        <div className='down-block'>
            { showFilter ? <Filter /> : null }

            <table className="styled-table"> 
                <thead>
                    <tr>
                        <th>Full Name </th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Invest Amount </th>
                        <th>Type </th>
                        <th>Date </th>
                        <th style={{ width: '11%' }}>
                            Status 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((item) => (
                        <tr key={item.id} id={item.id} className="active-row" onClick={() => handleClick(item.id)}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                            <td>{item.bankAmount}</td>
                            <td>Private</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <span className={item.jobStatus}>{item.jobStatus}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableDashboad;