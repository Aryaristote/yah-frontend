import axios from 'axios';
import Loading from './Loading';
import { fetchData } from '../axios/apiService';
import { AiOutlineEdit } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import React, { useEffect, useState } from 'react'

const PortofolioBlock = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/projects'); // Replace with your API endpoint
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/projects/delete/${id}`); // Replace with your delete API endpoint
          console.log('Element deleted successfully');
          fetchData(); // Fetch data again after successful deletion
        } catch (error) {
          console.error('Error deleting element:', error);
        }
    };
    
    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    return (
        <>
            { loading ? (
                <Loading />
            ):(
                <>
                    {data.map((itemData) => (
                        <section className='showDetails down-block'>
                            <div className='details-content'>
                                <div className="_section">
                                    <div className="secHeader">
                                        <h4><b>{itemData.name}</b></h4>
                                        <div className="action-btn">
                                            <button><AiOutlineEdit /></button>
                                            <button onClick={() => handleDelete(itemData._id)} ><BsTrash3 /></button>
                                            <button><FaPowerOff /> / <FaPowerOff /></button>
                                        </div>
                                    </div>
                                    <div className="secBody">
                                        <div className="infoSec">
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Target Amount</b>
                                                    <div>
                                                        <b>{itemData.targetAmount}</b>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <b>Number of Investors</b>
                                                        <div>
                                                            <b>~</b>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Address</b>
                                                    <div>
                                                        <b>{itemData.location}</b>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <b>Description</b>
                                                    <div>
                                                        <small>{itemData.description}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Start at</b>
                                                    <div>
                                                        <b>{itemData.createdDate}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Dead Line</b>
                                                    <div>
                                                        <b>{itemData.deadline}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Status</b>
                                                    <div>
                                                        <b>{itemData.status}</b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </>
            )}
        </>
    )
}

export default PortofolioBlock
