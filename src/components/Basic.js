import React from "react";
import { MDBBtn, MDBContainer, MDBTypography } from "mdb-react-ui-kit";

export default function Basic() {
  return (
    <>
      <MDBContainer className="mt-5">
        <div
          className="p-4 shadow-4 rounded-3"
          style={{ backgroundColor: "hsl(0, 0%, 94%)" }}
        >
          <MDBTypography tag="h2">Hello world!</MDBTypography>
          <p>
            This is a simple hero unit, a simple Hero-style component for
            calling extra attention to featured content or information.
          </p>

          <hr className="my-4" />

          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>

          <MDBBtn>Learn more</MDBBtn>
        </div>
      </MDBContainer>
    </>
  );
}
