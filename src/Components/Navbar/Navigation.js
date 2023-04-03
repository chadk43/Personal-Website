import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import React, { useState,  useRef } from "react";
import emailjs from "@emailjs/browser";
import { Image, Button, Modal, Form, Col } from "react-bootstrap";

import profile2 from "../Navbar/images/profile2.jpg";


const Navigation = () => {
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");
  const form = useRef();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const API_KEY = "cc9aa67c4e6c48498b4cefffb50e2991";
  const apiURL =
    "https://emailvalidation.abstractapi.com/v1/?api_key=" + API_KEY;

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const checkEmail = async (e) => {
    console.log("submitting");
    const isValid = await sendEmailValidationRequest();
    if (isValid) {
      setErrors({ ...errors, email: null });
      console.log("true", email);
      sendEmail(e);
      handleClose();
    } else {
      setErrors({
        ...errors,
        email: "Your email is invalid. Please check your input and try again.",
      });
      console.log("false");
    }
  };

  const sendEmailValidationRequest = async () => {
    const fullURL = apiURL + "&email=" + email;
    const validationResponse = await (await fetch(fullURL)).json();
    return validationResponse.is_valid_format.value;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9u8pzux",
        "template_m4b932o",
        form.current,
        "2N9f7x2aW_ky9o8qi"
      )
      .then(
        (result) => {
          alert("Your message has been successfuly sent");
        },
        (error) => {
          alert("failed to send message");
        }
      );
  };

  const [show, setShow] = useState(false);
  const handleClose = (e) => {
    setShow(false);
    setErrors({ ...errors, email: null });
  };
  const handleShow = () => setShow(true);

  return (
    <header className={classes["main-header"]}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <div style={{ display: "block", padding: "1em" }}>
              <Image
                roundedCircle
                src={profile2}
                className={classes["img-circle"]}
              />
            </div>
          </li>
          <li>
            <h1>Chad Koivuneva</h1>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <button onClick={handleShow}>Contact</button>
            {show ? (
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Email Me!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <Form ref={form}>
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        name="user_name"
                        type="text"
                        required
                        placeholder="Name"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        isInvalid={!!errors.email}
                        onChange={handleEmail}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} id="formGridQuery">
                      <Form.Label>Message</Form.Label>
                      <Form.Control name="query" as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button onClick={checkEmail} variant="primary" type="submit">
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            ) : (
              ""
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

//CONTACT FOR FUTURE:

// <Modal show={show} onHide={handleClose}>
//                   <Modal.Header closeButton>
//                     <Modal.Title>Email Chad</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <Form.Group className="mb-3">
//                       <Form.Label htmlFor="email">Email address</Form.Label>
//                       <Form.Control
//                         type="email"
//                         id="email"
//                         name="email"
//                         placeholder="name@example.com"
//                         autoFocus
//                        // value={email}
//                        // onChange={handleInputEmail}
//                        // isInvalid={!!errors.email}
//                       />

//                       <Form.Control.Feedback type="invalid">
//                         {errors.email}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Label>Message</Form.Label>
//                     <Form.Control
//                       id="message"
//                       name="message"
//                       as="textarea"
//                       rows={5}
//                     //  value={message}
//                     //  onChange={handleInputMessage}
//                     />
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                       Close
//                     </Button>
//                     <Button
//                       variant="primary"
//                       // type="submit"
//                       // disabled={state.submitting}
//                       //onClick={checkEmail}
//                       onClick={() => {
//                         handleClose();
//                         handleSubmit();
//                       }}
//                     >
//                       Send
//                     </Button>
//                   </Modal.Footer>
//                 </Modal>
