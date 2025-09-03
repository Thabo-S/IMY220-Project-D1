import React, { useState } from "react";
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

    return (
        <>
         <Navbar/>
        <div className="home-page">
            <h1>Welcome back,</h1>
            
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