import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import SearchInput from "../components/SearchInput";
import { localActivity, globalActivity } from "../data";
import Navbar from "../components/Navbar";
import Filters from "../components/filters"
import  Footer from "../components/Footer";
import PalmTree from "../components/PalmTree";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        const responseData = localStorage.getItem("currentUser");
        console.log("Raw localStorage data:", responseData);
        if (responseData) {
            console.log("Parsed localStorage data:", JSON.parse(responseData));
        }
    }, []);

    const responseData = localStorage.getItem("user");
    const loginResponse = responseData ? JSON.parse(responseData) : null;
    
    let currentUser = null;
    if (loginResponse) {
        if (loginResponse.user) {
            currentUser = loginResponse.user;
        } 
        else if (loginResponse.name && loginResponse.email) {
            currentUser = loginResponse;
        }
    }

    return (
        <>
         <Navbar/>
        <div className="home-page">
            <h1>Welcome back, {currentUser ? currentUser.name : "User"}</h1>
            
            <SearchInput 
                value={searchTerm} 
                onChange={setSearchTerm} 
                placeholder="Search projects..." 
            />

            <Filters/>
      
            <div className="feeds-container">
                <Feed 
                    title="Local Activity" 
                    activities={localActivity} 
                    type="local"
                />
                <Feed 
                    title="Global Activity" 
                    activities={globalActivity} 
                    type="global"
                />
            </div>
        </div>
        <PalmTree/>
        <Footer/>
        </>
    );
};

export default Home;