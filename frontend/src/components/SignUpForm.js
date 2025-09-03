// components/SignUpForm.js
import React, { useState } from "react";

const SignUpForm = ({ onSignUp }) => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!userData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (userData.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Email validation
        if (!userData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = "Email is invalid";
        }

        // Password validation
        if (!userData.password) {
            newErrors.password = "Password is required";
        } else if (userData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        // Confirm password validation
        if (userData.password !== userData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSignUp(userData);
            setUserData({ name: "", email: "", password: "", confirmPassword: "" });
        }
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            
            <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    required
                    className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-group">
                <label htmlFor="signup-email">Email</label>
                <input
                    type="email"
                    id="signup-email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    required
                    className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                    type="password"
                    id="signup-password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                    className={errors.password ? "error" : ""}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
            </div>
            
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={errors.confirmPassword ? "error" : ""}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>
            
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUpForm;