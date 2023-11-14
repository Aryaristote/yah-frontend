import axios from 'axios';
import Loading from './Loading';
import React, { useState, useEffect } from 'react';

const ContactContent = () => {
    const [allContact, getAllContact] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:3001/get-all-contacts';
        axios.get(apiUrl)
            .then((response) => {
                getAllContact(response.data.contacts);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    return (
        <div className='details-body contact-blk'>
            <div className="body-content">
                <div className='up-block'>
                    <div>
                        <h1 className='title'>Contact</h1>
                    </div>
                </div>
                { loading ? (
                    <Loading />
                ):(
                    <div className="each-blk">
                        {allContact.map((contact) => (
                            <div className="down-block" key={contact._id}>
                                <div className="down-content">
                                    <div className="cont-header">
                                        <div className="left-header">
                                            <b>Kalume Ernest</b><br />
                                            <small>aryaristote@gmail.com</small>
                                        </div>
                                        <div className="left-header">
                                            <small>Mardi, 5 Avril 2023</small>
                                        </div>
                                    </div>
                                    <div className="cont-body">
                                        <small><b>how manu characters are in this sentense are in this sentense are in this sentense</b></small><br/>
                                        <small>To place two elements in a row with Bootstrap and create some space between them, you can use the Bootstrap grid system. 
                                            You can wrap the two elements in a div with a class like col-md-6 to make them occupy half the width of their parent container and 
                                            then use margin or padding to add space between them. Here's an example:
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactContent;