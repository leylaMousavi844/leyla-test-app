import { useEffect, useState } from "react";
import Navbar from "../../component/navbar/Navbar";
import Main from "../../component/main/Main";
import AboutEnerjic from "../../component/aboutEnerjic/AboutEnerjic";
import Services from "../../component/services/Services";
import Advertising from "../../component/advertising/Advertising";
import Container from "../../component/container/Container";
import Footer from "../../component/footer/Footer";
import EmailComponent from "../../component/emailComponent/EmailComponent";
import ContactForm from "../../component/contactForm/ContactForm";
import DiscountedCourses from "../../component/discountedCourses/DiscountedCourses";


function Home() {

  useEffect(() => {

  }, [])
  return (
    <div >

      <Navbar />
      <Main />
      <DiscountedCourses/>
      <AboutEnerjic />
      <Services/>
      <ContactForm/>
      <Advertising/>
      <Container/>
      <EmailComponent/>
      <Footer/>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default Home;
