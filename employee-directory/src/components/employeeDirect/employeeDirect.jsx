import React from "react";
// import {Router} from "react-router-dom";
import Container from "../Container";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Search from "../Search";
import Table from "../Table";
import Footer from "../Footer";

function EmployeeDirect() {
  return (
    <>
    {/* <Router> */}
    <Navbar />
    {/* </Router> */}
    <Search />
    
          <Hero />
      <Container>
        <Table />
      </Container>
      <Footer />
    </>
  );
}

export default EmployeeDirect;