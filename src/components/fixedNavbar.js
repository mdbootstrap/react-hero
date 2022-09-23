import React from "react";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function FixedNavbar() {
  return (
    <>
      <header style={{ paddingLeft: 0, paddingTop: '1px' }}>
        <MDBNavbar expand="lg" fixed className="w-100" light bgColor="white" style={{position: 'fixed'}}>
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current="page" href="#">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Features</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">Pricing</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="#">About</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div className="p-5 text-center bg-light" style={{marginTop: '58px'}}>
          <h1 className="mb-3">Heading</h1>
          <h4 className="mb-3">Subheading</h4>
          <a className="btn btn-primary" href="" role="button">
            Call to action
          </a>
        </div>
      </header>
      <main>
        <MDBContainer className="text-center">
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
          <p>Scroll down</p>
        </MDBContainer>
      </main>
    </>
  );
}
