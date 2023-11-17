import axios from 'axios';
import Loading from './Loading';
import { BsTrash3 } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle, AiOutlineEdit  } from 'react-icons/ai';
import { CustomDialog, useDialog } from 'react-st-modal';


// Modal For Editing 
function CustomDialogContent({ projectId }) {
    console.log(`Opening modal for project with id: ${projectId}`);
    const dialog = useDialog();  

    const [value, setValue] = useState();
    const [oldData, setOldData] = useState();
    const [inputErrors, setInputErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        max: '',
        description: '',
        location: '',
        targetAmount: '',
        deadline: '',
        images: [],
    });

    // useEffect(() => {
    //     const fetchProjectData = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:5000/projects/${projectId}`);
    //             const projectData = response.data;
    //             // Updated this line to set initial state based on previous state
    //             setFormData(prevData => ({ ...prevData, ...projectData }));
    //             setOldData(projectData)
    //         } catch (error) {
    //             console.error('Error fetching project data:', error);
    //         }
    //     };

    //     fetchProjectData();
    // }, [projectId]);
    
     // Function to handle the option selection
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleImageChange = (e) => {
        const files = e.target.files;
        const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
        setFormData({ ...formData, images: imagesArray });
    };

    // Summit form 
    const handleSubmit = async (e) => {
        e.preventDefault();

       // Check if all required fields are not empty
        const requiredFields = ['name', 'description', 'max', 'location', 'targetAmount', 'deadline'];
        const errors = {};

        for (const field of requiredFields) {
            if (!formData[field]) {
                errors[field] = `Please fill in the ${field} field.`;
            }
        }

        if (Object.keys(errors).length > 0) {
            setInputErrors(errors);
            return;
        }
    
        try {
            const { name, max, location, targetAmount, deadline, description, images } = formData;
        
            const projectData = new FormData();
            projectData.append('name', name);
            projectData.append('max', max);
            projectData.append('description', description);
            projectData.append('location', location);
            projectData.append('targetAmount', targetAmount);
            projectData.append('deadline', deadline);
        
            images.forEach((image, index) => {
                projectData.append(`images[${index}]`, image);
            });

            const config = {
                headers: {
                'Content-Type': 'multipart/form-data',
                },
            };

            const response = await axios.put(`http://localhost:5000/projects/update/${projectId}`, projectData, config);
            if (response.status === 200) {
                dialog.close(value);
                setValue(response.data);
                window.location.reload();
            }
        } catch (error) {
            console.error('Error submitting project:', error);
        }
    };
    
    return (
        <div>
            <div className="modal-header">
                <h6>New Admin</h6>
            </div>
            <form className="modal-content" onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Project's Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                            className="input"
                            id="Name"
                            placeholder={formData.name}
                            // required
                        />
                        {inputErrors.name && <div className="error">{inputErrors.name}</div>}
                    </div> 
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Investors max Number</label>
                        <input
                            type="number"
                            value={formData.max} onChange={handleInputChange}
                            className="input"
                            id="max"
                            name="max"
                            min="1"
                            placeholder="Max investor number"
                            // required
                        />
                        {inputErrors.max && <div className="error">{inputErrors.max}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Project Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange}
                            className="input"
                            id="location"
                            placeholder="Project Location"
                            // required
                        />
                        {inputErrors.location && <div className="error">{inputErrors.location}</div>}
                    </div>
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Target Amount</label>
                        <input
                            type="number"
                            name="targetAmount"
                            value={formData.targetAmount}
                            onChange={handleInputChange}
                            className="input"
                            placeholder="Target Amount"
                            // required
                        />
                        {inputErrors.targetAmount && <div className="error">{inputErrors.targetAmount}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="descrpt">Deadline:</label>
                        <input type="date" name="deadline" value={formData.deadline} onChange={handleInputChange} />
                        {inputErrors.deadline && <div className="error">{inputErrors.deadline}</div>}
                    </div>
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Description</label>
                        <textarea className="input" cols="120" id="Name" placeholder="Project description" value={formData.description} onChange={handleInputChange} name="description" ></textarea>
                        {inputErrors.description && <div className="error">{inputErrors.description}</div>}
                    </div> 
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Upload Images <small>(up to 5)</small></label>
                        <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
                        {inputErrors.images && <div className="error">{inputErrors.images}</div>}
                    </div> 
                </div>
                {/* {errors && <div className="error">{errors}</div>} */}
                <div className="form-group button-grp">
                    <div className="cancel-btn" onClick={() => {dialog.close(value)}}>
                        Cancel <AiOutlineCloseCircle className="modalIcn" />
                    </div>
                    <button type="submit" className="signupbtn btn btn-primary btn-lg btn-block">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

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
                                            <button
                                                onClick={async () => {
                                                    const result = await CustomDialog(
                                                      <CustomDialogContent projectId={itemData._id} />
                                                    );
                                                }}
                                            ><AiOutlineEdit /></button>
                                            <button onClick={() => handleDelete(itemData._id)} ><BsTrash3 /></button>
                                            <button><FaPowerOff /></button>
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
