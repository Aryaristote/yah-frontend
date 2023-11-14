import axios from 'axios';
import { FaBell } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa"; 
import user from '../assets/images/user.png';
import { fetchData } from '../axios/apiService';
import { React, useState, useEffect } from 'react';
import logo from '../assets/images/yah-invest-logo.jpeg';

const Nav = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(20);
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [showResultBlk, setShowResultBlk] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [userNameFromCookie, setUserNameFromCookie] = useState('');

    useEffect(() => {
        const getCookie = (name) => {
        const cookieArray = document.cookie.split('; ');
        for (let i = 0; i < cookieArray.length; i++) {
            const cookie = cookieArray[i];
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
            return decodeURIComponent(cookieValue);
            }
        }
        return '';
        };

        const userFromCookie = getCookie('User');
        setUserNameFromCookie(userFromCookie);
    }, []); 

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            if (responseData !== null) {
                setData(responseData);
                setFilteredData(responseData.slice(0, itemsToShow));
                setLoading(false);
            }
        };

        getData();
    }, []);

    const handleSelectChange = (event) => {
        const selectedValue = parseInt(event.target.value) + itemsToShow;
        setItemsToShow(selectedValue);
        setFilteredData([...data.slice(0, selectedValue)]);
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = data.filter((username) => {
            return username && username.username && username.username.toLowerCase().includes(input)
        });
        setFilteredData(results);
        setShowResultBlk(true);

        if (filteredData.length > 0) {
            setIsActive(true);
        }else{
            setIsActive(false);
        }
        
    };

    const handleClick = () => {
        setIsActive(false);
    };

    return(
        <nav className='navBar'>
            <div className='nav-content'>
                <div className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='nav-left'>
                    <div>
                        <form onSubmit={handleSubmit} className='search'>
                            <input type="search" 
                                className="searchTerm" placeholder="Search for anything?"
                                value={input} onChange={handleChange} >
                            </input>
                            <button type="submit" className="searchButton">
                                <FaSearch className='searchIcn' /> 
                            </button>
                        </form>
                    </div> 

                    {isActive && (
                        <div div className={`searchResult ${isActive ? 'active' : ''}`}>  
                            <div className='sResult-ctn'>
                                <div className='title-sec'>
                                    <h3>{filteredData.length} Result{filteredData.length > 0 ? 's' : ''}</h3>
                                    <MdCancel className='cancelIcn' onClick={handleClick} />
                                </div>
                                {filteredData.map((item) => (
                                    <div className="result-sec">
                                        <li><a href={`user-details/${item.id}`}>{item.username}</a></li>
                                    </div>
                                ))}  
                            </div>
                        </div>)
                    }
                    <div className='profile'>
                        <div>
                            <li><a href="#"><FaBell className='notifIcn' /></a></li>
                        </div>
                        <div className='profile-opt'>
                            <div className='prof-content'>
                                <img src={user} className="App-logo" alt="logo" />
                                <small>{userNameFromCookie}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;