import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col, Label, Input, FormGroup} from "reactstrap";
import Axios from "axios";
import {FaPlus } from "react-icons/fa";

const guess = "5ac4a9a9650a6822cf9f8935cf6e421b";

function Tambah() {
  const [rate, setRate] = useState("");
  const [id, setId] = useState("");

  const updatePost = () => {
    Axios.post(
      `https://api.themoviedb.org/3/movie/${id}/rating?api_key=93329c64a1df4170e553ce341ed9daa7&guest_session_id=${guess}`,
      { value: rate }
    ).then((res) => {
      setRate(res.data);
      console.log("Data: ", res.data);
    });
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setId("");
    setRate("");
    console.log(id, rate);
    updatePost();
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor: "#000000", border: "#000000"}}>
        <FaPlus/>
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Rate Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitForm}>
            <Row form>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">Id Movie</Label>
                  <Input
                    type="text"
                    name="id"
                    id="id"
                    value={id}
                    onChange={handleId}
                  />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="examplePassword">Rating Movie</Label>
                  <Input
                    type="text"
                    name="rating"
                    id="rating"
                    onChange={handleRate}
                  />
                </FormGroup>
              </Col>
              <Button type="submit" onClick={handleClose}>
                submit
                {/* <Alert color="primary">
        This is a primary alert — check it out!
      </Alert> */}
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      
    </>
  );
}

export default Tambah;
