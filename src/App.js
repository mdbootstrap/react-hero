import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">Basic</MDBBtn>
      </Link>
      <Link to="/hero-image">
        <MDBBtn className="m-3">Hero image</MDBBtn>
      </Link>
      <Link to="/hero-section-with-navbar">
        <MDBBtn className="m-3">Hero section with navbar</MDBBtn>
      </Link>
      <Link to="/bg-image-with-navbar">
        <MDBBtn className="m-3">Background image with navbar</MDBBtn>
      </Link>
      <Link to="/fixed-navbar">
        <MDBBtn className="m-3">Fixed Navbar</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
