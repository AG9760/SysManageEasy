import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

// import { Button } from "@mui/material";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
  id: "",
  gender: "",
  password: "",
  rollNo: "",
  dob: "",
};

const Myprofile = () => {
  const [user, setUser] = useState(initialValue);
  let contacts = localStorage;
  const [id, setId] = useState(contacts.id);

  const getUser = (id) => {
    try {
      const url = process.env.REACT_APP_URL + "/" + id;
      //   return await axios.get(url);
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          console.log("here", response);
          setUser(response.user[0]);
          //   return data;
        });
    } catch (error) {
      console.log("error while calling gettinr user", error);
    }
  };
  // const { id } = useParams();
  const loadUserDetails = async () => {
    let contacts = localStorage;
    console.log("loading user details", contacts);
    getUser(contacts.id);
    return true;
  };
  useEffect(() => {
    let a = loadUserDetails();
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editstudent = () => {
    const { name, username, email, phone, gender, password, dob } = user;
    console.log(user);
    if (name && username && email && phone && gender && password && dob) {
      axios
        .put(process.env.REACT_APP_URL + "/" + id, user)
        .then((res) => console.log(res));
      // alert("Edit Profile successfully");
      // window.location.reload();
      // window.location.href = "/AllUsers";
    } else {
      alert("invalid input");
    }
  };

  const [image, setImage] = useState("");
  // const convertToBase = (e) => {
  //   console.log(e);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error:", error);
  //   };
  // };

  const convertToBase = () => {
    console.log("image uploaded");
  };

  return (
    <main
      className="container "
      style={{ marginLeft: "11.5rem", zIndex: "-1" }}
    >
      <h3
        style={{
          marginTop: "75px",
          textAlign: "center",
          fontFamily: "math",
          color: "darkblue",
          textDecoration: "underline",
        }}
      >
        {" "}
        My Profile
      </h3>

      <section
        style={{
          backgroundColor: "#eee",
          marginLeft: "100px",
          paddingBottom: "40px",
        }}
      >
        <MDBContainer
          className="py-5"
          style={{ width: "1000px", marginTop: "10px" }}
        >
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody
                  style={{
                    fontFamily: "Castoro Titling",
                    fontSize: "20px",
                  }}
                >
                  <MDBCol>
                    <MDBCardText>Profile Image:</MDBCardText>
                    <img src="data:image/jpeg;base64,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"></img>
                  </MDBCol>

                  <MDBInput
                    type="file"
                    name="filename"
                    onChange={convertToBase}
                    style={{
                      border: "2px solid cornflowerblue",
                      boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                    }}
                  />
                  <br />
                  {/* {image === "" || image == null ? (
                    ""
                  ) : (
                    <img
                      width={200}
                      height={200}
                      src={image}
                      style={{ borderRadius: "50%" }}
                    />
                  )} */}
                  {/* <button
                    onClick={editstudent}
                    style={{
                      borderRadius: "7px",
                      fontSize: "20px",
                      width: "100px",
                      backgroundColor: "#3b71ca",
                      color: " white",
                      border: "none",
                      textAlign: "center",
                      float: "center",
                    }}
                  >
                    Upload
                  </button> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody
                  style={{
                    fontFamily: "Castoro Titling",
                    fontSize: "20px",
                  }}
                >
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Full Name:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="name"
                          value={user.name}
                          onChange={(e) => onValueChange(e)}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Username:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="username"
                          value={user.username}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="email"
                          value={user.email}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="phone"
                          value={user.phone}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="gender"
                          value={user.gender}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Roll No.:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="rollNo"
                          value={user.rollNo}
                          onChange={(e) => onValueChange(e)}
                          re
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          adOnly
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Date of Birth:</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        <MDBInput
                          type="text"
                          name="date"
                          value={user.dob}
                          style={{
                            border: "2px solid cornflowerblue",
                            boxShadow: "5px 5px 7px 0px rgb(165 184 217)",
                          }}
                          onChange={(e) => onValueChange(e)}
                        >
                          {" "}
                        </MDBInput>
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBBtn
            style={{ float: "right", fontSize: "15px" }}
            onClick={editstudent}
          >
            Update Profile
          </MDBBtn>
        </MDBContainer>
      </section>
    </main>
  );
};

export default Myprofile;
