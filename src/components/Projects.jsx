import axios from 'axios';
import ProjectBlock from './ProjectBlock';
import { React, useState } from 'react';
import { AiOutlineCloseCircle  } from 'react-icons/ai';
import { CustomDialog, useDialog } from 'react-st-modal';

// Modal For new Project 
function CustomDialogContent() {
    const dialog = useDialog();  

    const [value, setValue] = useState();
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        max: '',
        description: '',
        location: '',
        targetAmount: '',
        deadline: '',
        images: [],
      });
    
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all required fields are not empty
        const requiredFields = ['name', 'description', 'location', 'targetAmount', 'deadline'];

        for (const field of requiredFields) {
            if (!formData[field]) {
                setErrors(`Please fill in the ${field} field.`);
                console.log(errors)
                return;
            }
        }
    
        try {
            const { name, max, description, location, targetAmount, deadline, images } = formData;
        
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

            const response = await axios.post('http://localhost:5000/create-project', projectData, config);
            if (response.status === 201) {
                dialog.close(value);
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
                            placeholder="Project Name"
                            // required
                        />
                        {errors&& <div className="error">{errors}</div>}
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
                        {errors && <div className="error">{errors}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Project Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange}
                            className="input"
                            id="lastname"
                            placeholder="Project Location"
                            // required
                        /> 
                        {errors && <div className="error">{errors}</div>}
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
                            id="lastname" 
                            placeholder="Target Amount"
                            // required
                        /> 
                        {errors && <div className="error">{errors}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="descrpt">Deadline:</label>
                        <input type="date" name="deadline" value={formData.deadline} onChange={handleInputChange} />
                        {errors && <div className="error">{errors}</div>}
                    </div>
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Description</label>
                        <textarea className="input" cols="120" id="Name" placeholder="Project description" value={formData.description} onChange={handleInputChange} name="description" ></textarea>
                        {errors && <div className="error">{errors}</div>}
                    </div> 
                </div>
                <div className="form-group phone">
                    <div className="form-group">
                        <label htmlFor="name">Upload Images <small>(up to 5)</small></label>
                        <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
                        {errors && <div className="error">{errors}</div>}
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

const Projects = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className='details-body'>
            <div className="body-content">
                <div className='up-block'>
                    <div>
                        <h1 className='title'>Projects</h1>
                        <button className=""
                            onClick={async () => {
                                const result = await CustomDialog(
                                    <CustomDialogContent />
                                );
                            }}>
                            New Project
                        </button>
                    </div>
                </div>
                <div>
                    <ProjectBlock />
                </div>
            </div>
        </div>
    )
}

export default Projects;
