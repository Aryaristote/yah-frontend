import axios from 'axios';
import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';

export default function WelcomContact(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({}); 
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [loading, setLoading] = useState(false);

    //Notification
    const successNotify = () => {
        toast.success("Form Submitted !", {
        position: toast.POSITION.TOP_CENTER
        });
    };
    const errorNotify = () => {
        toast.error("Form not submitted", {
        position: toast.POSITION.TOP_CENTER
        });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (name.length <= 0) {
            errors.name = "Provide you Name";
        }
        if (email.length <= 0) {
            errors.email = "Provide your Email";
        }
        if (subject.length <= 0) {
            errors.subject = "Provide a subject";
        }
        if (comment.length <= 0) {
            errors.comment = "Provide a comment";
        }

        if (Object.keys(errors).length > 0) {
            console.error(errors);
            return;
        }

        const formData = {
            name, 
            email, 
            subject, 
            comment
        }

        try{
            const response = await fetch('http://localhost:3001/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.status === 200) {
                setName('');
                setEmail('');
                setSubject('');
                setComment('');
                successNotify()
                setLoading(false)
            }else {
                errorNotify()
            }
        }catch (err){
            errorNotify()
            console.log(err)
        }
          finally{
            setLoading(false)
        }
    }

    return (
        <section id="contact" class="contact">
            {/* Notification popup  */}
            <ToastContainer />
            <div className="container contact-title">
                <h4 class="feature-title">Let keep in touch</h4>
            </div>
            <div class="container">
                <div class="contact-content">
                    <div className="row">
                    <div class="col-sm-8 form-block">
                        <div class="single-contact-box">
                            <div class="contact-form">
                                <form onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="text" 
                                                class="form-control" 
                                                id="name" 
                                                placeholder="Name*" 
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)} require
                                            />
                                            {errors && <div className="error" style={{ fontSize: '11px' }}>{errors.name}</div>}
                                        </div><br/>
                                        </div>
                                        <div class="col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input type="email" 
                                                class="form-control" 
                                                id="email" 
                                                placeholder="Email*" 
                                                name="email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} required
                                            />
                                            {errors && <div className="error" style={{ fontSize: '11px' }}>{errors.email}</div>}
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <div class="form-group">
                                            <input type="text" maxlength="75"
                                                class="form-control" 
                                                id="subject" 
                                                placeholder="Subject" 
                                                name="subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)} required
                                            />
                                            {errors && <div className="error" style={{ fontSize: '11px' }}>{errors.subject}</div>}
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="8"  maxlength="300"
                                                    placeholder="Message"
                                                    name="comment"
                                                    value={comment}
                                                    onChange={(e) => setComment(e.target.value)} required
                                                >
                                                {errors && <div className="error" style={{ fontSize: '11px' }}>{errors.comment}</div>}
                                            </textarea>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="">
                                                <button type="submit" className="single-contact-btn" disabled={loading}>
                                                    {loading ? 'Loading...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div><br /><br />
                    </div>
                    <div class="col-sm-4">
                        <div class="single-contact-box">
                        <div class="contact-adress">
                            <div class="contact-add-head">
                            <h3>YAH Invest</h3>
                            <small>Feel free to call, email of message any time</small>
                            </div>
                            <div class="contact-add-info">
                            <div class="-contact-add-info">
                                <h4>Phone</h4>
                                <p>987-123-6547</p>
                            </div>
                            <div class="-contact-add-info">
                                <h4>Email</h4>
                                <p>browny@info.com</p>
                            </div>
                            <div class="-contact-add-info">
                                <h4>Office</h4>
                                <p>Kigali, KK 453 Kaciru RR</p>
                            </div>
                            </div>
                        </div>
                        <div class="hm-foot-icon">
                            <ul>
                            <li><a href="#"><FaFacebook /></a></li>
                            <li><a href="#"><FaTwitter /></a></li>
                            <li><a href="#"><FaLinkedin /></a></li>
                            <li><a href="#"><FaInstagramSquare /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}