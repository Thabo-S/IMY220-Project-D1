import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import SplashNav from "../components/SplashNav";
import { projects } from "../data"
import ProjectPreview from "../components/ProjectPreview"
import  Footer from "../components/Footer";

const Splash = () => {
    const [activeForm, setActiveForm] = useState(null);

    const handleLogin = (credentials) => {
        console.log("Login attempt with:", credentials);
        // Stub for login functionality
    };

    const handleSignUp = (userData) => {
        console.log("Sign up with:", userData);
        // Stub for sign up functionality
    };

    return (
        <div className="splash-container">
            <SplashNav setActiveForm={setActiveForm} />

            <main className="splash">
                <div className="splash-content">
                    <h1 className="splash-tagline">
                        Repo River is your flowing hub for seamless version control and collaboration
                    </h1>

                    <div className="splash-features">
                        <div className="feature-card">
                            <img src="/assets/images/connected-icon.png" alt="Network Icon" className="feature-icon" />
                            <p>Manage projects, track changes, and connect with developers in real-time</p>
                        </div>

                        <div className="feature-card">
                            <img src="/assets/images/code-icon.png" alt="Code Icon" className="feature-icon" />
                            <p>Streamline your coding workflow with a simple, secure, and collaborative platform</p>
                        </div>
                    </div>

                    {/* Forms overlay */}
                    {activeForm && (
                        <div className="form-overlay">
                            <div className="form-container">
                                {activeForm === 'login' ? (
                                    <LoginForm onLogin={handleLogin} />
                                ) : (
                                    <SignUpForm onSignUp={handleSignUp} />
                                )}
                                <button
                                    className="close-form"
                                    onClick={() => setActiveForm(null)}
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="splash-cta">
                    <h2>Start Your Coding Journey Today</h2>
                    <div className="cta-buttons">
                        <button className="cta-button primary" onClick={() => setActiveForm('signup')}>
                            Get Started
                        </button>
                        <button className="cta-button secondary" onClick={() => setActiveForm('login')}>
                            Sign In
                        </button>
                    </div>
                </div>

                <div className="project-previews">
                    {projects.slice(0,3).map((data, index) => (
                        <div  key={index}>
                            <ProjectPreview project={data}/> 
                        </div>
                    ))}
                </div>
            </main>
            
            <Footer/>
        </div>
    );
};

export default Splash;