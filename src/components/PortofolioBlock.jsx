import Loading from './Loading';
import { fetchData } from '../axios/apiService';
import React, { useEffect, useState } from 'react'

const PortofolioBlock = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            if (responseData !== null) {
                setData(responseData);
                setLoading(false);
            }
        };

        getData();
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
                                        {/* <h2>Personal information</h2> */}
                                    </div>
                                    <div className="secBody">
                                        <div className="infoSec">
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Full Name</b>
                                                    <div>
                                                        <b>{itemData.username}</b>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <b>Marital Status</b>
                                                    <div>
                                                        <b>Single</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Phone Number</b>
                                                    <div>
                                                        <b>{itemData.phoneNumber}</b>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <b>Children</b>
                                                        <div>
                                                            <b>-</b>
                                                        </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Email Address</b>
                                                    <div>
                                                        <b>{itemData.email}</b>
                                                    </div>
                                                </div>
                                                <div className="down">
                                                    <b>Type of residence</b>
                                                    <div>
                                                        <b>Parent’s Apartment</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Used Bank</b>
                                                    <div>
                                                        <b>Manilla Corps Bank</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='block'>
                                                <div className="up">
                                                    <b>Gender</b>
                                                    <div>
                                                        <b>Male</b>
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
