import React, { useState } from "react";
import "../../Styles/ContactUs.css";
import { Row, Col, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        company: "",
        title: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    // Input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" }); // Clear error on change
    };

    // Validation function
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.number) {
            newErrors.number = "Number is required.";
        } else if (!/^\d+$/.test(formData.number)) {
            newErrors.number = "Enter a valid phone number.";
        }
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    // Submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data Submitted:", formData);
            // Add submission logic (e.g., API call) here
        }
    };

    return (
        <>
            <section id="ContactContainer">
                <Row>
                    <Col lg={12} md={12} style={{width:"100%"}}>
                        <div className="ContactFormContainer">
                            <h4>Your Details</h4>
                            <div>
                                <Input
                                    placeholder="Your Name*"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error-message">{errors.name}</span>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Your Email*"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Phone Number"
                                    type="text"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                                {errors.number && <span className="error-message">{errors.number}</span>}
                            </div>
                            <div>
                                <Input
                                    placeholder="Company"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Input
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <TextArea
                                    placeholder="Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && <span className="error-message">{errors.message}</span>}
                            </div>
                            <div className="BtnContainer">
                                <button type="primary" onClick={handleSubmit}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={12} style={{width:"100%"}}>
                        <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ textAlign: "center" }}>
                                <MdOutlineMarkEmailRead style={{ fontSize: "30px" }} />
                                <h3><a href="mailto:Info@revords.com" style={{color:"black"}}>Info@revords.com</a></h3>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default ContactUs;
