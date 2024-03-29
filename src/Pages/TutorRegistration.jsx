import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Registration.css'



export const TutorRegistration = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        fullname:'',
        email: '',
        subject:'',
        phoneNumber: '',
        birthday:'',
        password: '',
        confirmPassword: '',

    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.fullname.trim()) {
            validationErrors.fullname = "Full Name is required";
          } else if (!/^[a-zA-Z\s]+$/.test(formData.fullname)) {
            validationErrors.fullname = "Full Name should contain only letters and spaces";
          }

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        }
        else if (!/^[a-zA-Z]+$/.test(formData.username)) {
            validationErrors.username = "Username should contain only letters";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        }
        if (!formData.birthday.trim()) {
            validationErrors.birthday= "Date of birth is required";
        }
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = "Phone number is required";
          } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            validationErrors.phoneNumber = "invalied phone number";
          }
        if (!formData.subject.trim()) {
            validationErrors.subject = "Subject is required";
          }
        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            validationErrors.password = "Password should be at least 8 characters";
        }
        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Passwords don't match";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully");
        }
    };

    return (
        <div className="box">
            
        <form className="form-container" onSubmit={handleSubmit}>
            <h1>Sign-Up</h1>
            <div>
                <label id='fullname'> Full Name </label>
                <input
                    type="text"
                    name="fullname"
                    placeholder='John Doe'
                    autoComplete='off'
                    onChange={handleChange}
                
                    value={formData.fullname}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            <div>
                <label id='user'> Username </label>
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formData.username}
                />
        {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}            
           </div>
            
            
            <div>
                <label> Email </label>
                <input
                    type="email"
                    name="email"
                    placeholder='example@example.com'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formData.email}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
            
            <div>
                
                <label> Date of Birth </label>
                <input
                    type="date"
                    name="birthday"
                    placeholder='date'
                   
                    onChange={handleChange}
                    value={formData.birthday}
                />
                {errors.birthday && <span style={{ color: 'red' }}>{errors.birthday}</span>}
            </div>
            <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder='Enter phone number'
          autoComplete='off'
          value={formData.phoneNumber}
          
          onChange={handleChange}
        />
        {errors.phoneNumber && <span style={{ color: 'red' }}>{errors.phoneNumber}</span>}
            <div>
                
            </div>
            
            <div>
            <label>What course do you need to help with?</label>
        <select
        id='select'
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option  id='subject'value=""><h1>Select a subject</h1></option>
          <option id='Maths' value="Maths">Maths</option>
          <option id='Chemistry'value="Chemistry">Chemistry</option>
          <option id='Psychology'value="Psychology">Psychology</option>
          <option id='Geography'value="Geography">Geography</option>
          <option id='Physics'value="Physics">Physics</option>
          <option id='Economics'value="Economics">Economics</option>
          <option id='Logic'value="Logic">Logic</option>
          <option id='C'value="C++">C++</option>
          <option id='Others'value="Others">Others</option>
          {/* Add more options as needed */}
        </select>
        {errors.subject && <span style={{ color: 'red' }}>{errors.subject}</span>}
                
            </div>
            <div>
                <label> Password </label>
                <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formData.password}
                />
                {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
            </div>
            <div>
                <label> Confirm Password </label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    autoComplete='off'
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword}</span>}
            </div>
            <button id='button' type="submit">Submit</button>
            <p id='p1'>Already have an account?<Link  id='Link'to="/login">Login</Link> </p>
        </form>
        </div>
    );
};
export default TutorRegistration;
