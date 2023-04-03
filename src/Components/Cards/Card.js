import classes from "./Card.module.css";
import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";


const CardImage = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadPDF = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf',{
      headers : { 
        'Content-Type': 'application/pdf',
        'Accept': 'application/pdf'
       }
     }
    ).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className={classes["cardcss"]}>
      <Card style={{ width: "18rem", borderwidth: "3px" }}>
        <Card.Img
          className={classes["card-img-top"]}
          variant="top"
          src={props.img}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
        </Card.Body>
        <Card.Footer variant="primary">
          <Button
            className={classes["cardbutton"]}
            variant="primary"
            onClick={props.buttontext === "Details" ? handleShow : downloadPDF }
          >
            {props.buttontext}
          </Button>
          <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {props.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.bodydepth}</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default CardImage;
