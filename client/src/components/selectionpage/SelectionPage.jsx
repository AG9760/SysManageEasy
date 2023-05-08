import React from "react";
import { Link } from "react-router-dom";
import "./selectionpage.css";
// import LoginIcon from "@mui/icons-material";
import { Login, Public } from "@mui/icons-material";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
// import backg from "public/assets/backg.jpg";

// const styleForButton = {
//   fontsize: "2.5em",
// };

export default function SelectionPage() {
  return (
    // <div
    //   className="backimg"
    //   style={{
    //     height: "100%",
    //     width: "100%",
    //     // backgroundImage:
    //     //   'url("http://www.agrasenvidyamandir.ac.in/images/bg/school.jpg")',
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    //   <div
    //     className="split left"
    //     style={{
    //       backgroundColor: "white",
    //       height: "50%",
    //       width: "55%",
    //       marginTop: "40%",
    //       marginLeft: "30%",
    //     }}
    //   >
    //     <div className="centered">
    //       <img src="/assets/login3.png" alt="React Image" />
    //     </div>
    //   </div>

    //   <div className="split right">
    //     <div className="centered">
    //       <h1 className="text"> Student Management System </h1>
    //       <div>
    //         <Link to="/login" className="link">
    //           <button className="loginbutton">
    //             {" "}
    //             <b> Login </b>
    //             <Login className="loginicon" sx={{ fontSize: "40px" }} />
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <form action="">
      <div
        className="background-radial-gradient overflow-hidden"
        style={{ width: "100vw" }}
      >
        <MDBContainer
          fluid
          className="background-radial-gradient overflow-hidden"
          style={{ width: "100%" }}
        >
          <MDBRow md="12">
            <MDBCol
              md="6"
              className="text-center text-md-start d-flex flex-column justify-content-center"
            >
              <div style={{ margin: "80px" }}>
                <img src="/assets/login3.png" alt="React Image" />
              </div>
            </MDBCol>

            <MDBCol md="5" className="position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <MDBCard
                className="bg-glass cardhover"
                style={{ margin: "160px", padding: "5px" }}
              >
                <MDBCardBody className="p-5">
                  <h2 className="mb-2" style={{ fontFamily: "math" }}>
                    Student Management System
                  </h2>
                  <Link to="/login">
                    <MDBBtn className="w-100 mb-4" size="md">
                      Login
                    </MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </form>
    // </div>
  );
}
