import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { BiUser } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'; 
import UserTabOne from './UserTabOne';
import UserTabTwo from './UserTabTwo';
import { AiFillStar } from 'react-icons/ai'
import { FaRegFlag} from 'react-icons/fa'

export default function DetailBody(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(1);
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://649895369543ce0f49e22cc6.mockapi.io/users/${id}`); // Replace with your API endpoint
                const data = await response.json(); 
                setItemData(data);
        } catch (error) {
                console.error('Error fetching item data:', error);
            }
        };
    
        fetchData();
    }, [id]);

    const navigateToHome = () => {
        navigate('/dashboard');
    };

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='details-body'>
            <div className="body-content"> 
                <section className='up-content'>
                    <BsArrowLeft onClick={navigateToHome} className='backIcon'/>
                    <div className='upHeader'>
                        <h4>User Details</h4>
                        <div className='header-btn'>
                            <button>Remove Investor</button>
                            <button>Activate Investor</button>
                        </div>
                    </div>
                </section>

                {itemData ? (
                    <div>
                        <section className="down-content">
                            <div className="content-prf">
                                <div className="userPrf">
                                    <div className="profileImg">
                                        <BiUser className='prfIcon' />
                                    </div>
                                    <div className='profileNames'>
                                        <div>
                                            <b className='Name'>{itemData.username}</b>
                                        </div>
                                        <div>
                                            <b className='descrpt'>LSQFf587g90</b>
                                        </div>
                                    </div>
                                </div>
                                <div className="userRate">
                                    <div className="rateContent">
                                        <b>Rwanda</b>
                                        <div className='stars'>
                                            <FaRegFlag />
                                        </div>
                                    </div>
                                </div>
                                <div className="userFinance">
                                    <b>₦200,000.00</b>
                                    <div>
                                        <small>Provider: Manilla Corps Bank</small>
                                    </div>
                                </div>
                            </div>
                            <div className="navProfile">
                                <div className="navContent">
                                    <div className={`tab ${activeTab === 1 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(1)}>
                                        <h5>General Details</h5>
                                    </div>
                                    <div className={`tab ${activeTab === 2 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(2)}>
                                        <h5>Documents</h5>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {activeTab === 1 && <UserTabOne itemData={itemData}/>}
                        {activeTab === 2 && <UserTabTwo />}
                    </div>
                    ) : (
                        <Loading />
                    )} 
            </div>
        </div>
    )
}
