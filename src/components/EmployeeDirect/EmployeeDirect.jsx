import React from "react";
// import {Router} from "react-router-dom";
import Container from "../Container";
import Navbar from "../Navbar";
import Table from "../Table";
import Footer from "../Footer";

function EmployeeDirect() {
  return (
    <>
    {/* <Router> */}
    <Navbar />
    {/* </Router> */}
    
          {/* <Hero /> */}
      <Container>
        <Table />
      </Container>
      <Footer />
    </>
  );
}

export default EmployeeDirect;