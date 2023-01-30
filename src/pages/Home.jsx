import React ,{ Fragment } from "react";
import Header from "../components/header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import ProposSection from "../components/Propos-Section/ProposSection";
import Course from "../components/Courses/Course";
import Opy from "../components/Aviss/Opy";
import Footer from "../components/Footer/Footer";


const Home=()=>{
    return <Fragment>
        <Header/>
        <HeroSection></HeroSection>
        <ProposSection></ProposSection>
        <Course></Course>
        <Opy></Opy>
        <Footer></Footer>
    </Fragment>
};
export default Home;