import Loading from './Loading';
import Select from 'react-select'
import CardDashboad from './CardDashboad'
import TableDashboad from './TableDashboad';
import { fetchData } from '../axios/apiService';
import { React, useState, useEffect } from 'react';
import { CustomDialog, useDialog } from 'react-st-modal';
import { FiArrowDown, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { AiOutlineDown, AiFillFlag, AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineCloseCircle  } from 'react-icons/ai';

//Modal to add new Admin
function CustomDialogContent() {
    const dialog = useDialog();  

    const [value, setValue] = useState();
    const [name, setName] = useState('');
    const [dupEmail, setDupEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({}); 
    const [duplEmail, setDuplEmail] = useState(null)
    const [optionValue, setOptionValue] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    //Modal
    const options = [
        { value: 'simple', label: 'Simple Admin' },
        { value: 'full', label: 'Full Admin' },
    ]
    
    // Function to handle the option selection
    const handleSelectChange = (selected) => {
        setSelectedOption(selected);
        setOptionValue(selected.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (name.length < 4) {
            errors.name = "Please provide a First Name";
        }
        if (name.length < 4) {
            errors.lastname = "Please provide a Last Name";
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "Invalid email format";
        }

        if (Object.keys(errors).length > 0) {
            console.error(errors);
            return;
        }
    
        const formData = {
          name,
          lastname,
          email,
          optionValue
        };

        console.log(formData)

        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.status === 200) {
                console.log("User created successfully");
                dialog.close(value);
            }
            if (response.status === 400) {
                setDupEmail("This email already exist")
                console.log("This email already exist");
            }
        } catch (err) {
            if (err.response && err.response.data) {
                console.log(err)
            } else {
                console.log('An error occurred during signup.');
            }
        }
    };

    return (
        <div>
            <div className="modal-header">
                <h6>New Admin</h6>
            </div>
            <form className="modal-content" onSubmit={handleSubmit} >
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            value={name} onChange={(e) => setName(e.target.value)}
                            className="input"
                            id="Name"
                            name="name"
                            placeholder="First Name"
                            // required
                        />
                        {errors.name && <div className="error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input
                            type="text"
                            value={lastname} onChange={(e) => setLastname(e.target.value)}
                            className="input"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            // required
                        />
                        {errors.lastname && <div className="error">{errors.lastname}</div>}
                    </div>
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Email Address</label>
                        <input
                            type="email"
                            value={email} onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            id="lastname"
                            name="email"
                            placeholder="Email Address"
                            // required
                        /> 
                        {errors.email && <div className="error">{errors.email}</div>}
                        {dupEmail && <div className="error">{dupEmail}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="descrpt">Admin Role</label>
                        <Select options={options} value={selectedOption} onChange={handleSelectChange} name="p-method" className='p-method' />
                        {errors.descrpt && <div className="error">{errors.descrpt}</div>}
                    </div>
                </div>
                <div className="form-group button-grp">
                    <div className="cancel-btn" onClick={() => {dialog.close(value)}}>
                        Cancel <AiOutlineCloseCircle className="modalIcn" />
                    </div>
                    <button type="submit" className="signupbtn btn btn-primary btn-lg btn-block">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

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

const BodyContent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [input, setInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const responseData = await fetchData();

            if (responseData !== null) {
                const formatted = formatUserData(responseData);
                setData(formatted);
                setFilteredData(formatted.slice(0, itemsToShow));
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

    const handleChange = (value) => {
        setInput(value); 
        const results = data.filter((username) => {
            return username && username.username && username.username.toLowerCase().includes(value)
        });
        setFilteredData(results);
    };
    
    return (
        <div className='details-body'>
            <div className="body-content">
                <div className='up-block'>
                    <div>
                        <h1 className='title'>Users</h1>
                        <div className="card-upBtn">
                            <button className=""
                                onClick={async () => {
                                    const result = await CustomDialog(
                                      <CustomDialogContent />
                                    );
                                }}
                            >Add Admin</button>
                        </div>
                    </div>
                    <CardDashboad userData={data}/> 
                </div>

                { loading ? (
                    <Loading />
                ):(
                    <div>
                        <TableDashboad userData={filteredData} />
                        <div className='pagination'>
                            <small>Page 25 out of 45</small>
                            <div className="pag-btn">
                                <div className="btn-block">
                                    <div className='pagBtn'><FiArrowLeft className="pagLeft" /></div>
                                    <div className="pgnNum">1</div> 
                                    <div className="pgnNum numActive">2</div>
                                    <div className="pgnNum">3</div>
                                    <div className='pagBtn'><FiArrowRight className="pagRight" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BodyContent;