import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
  Badge,
  Card,
} from "reactstrap";
import ModalData from "./modalData";
const data = ModalData.project;
const Detail = ({ show, toggle }) => {
  const ar = Array.from(Array(7).keys());
  return (
    <Modal isOpen={show} toggle={toggle} size="lg">
      <ModalHeader>Projects</ModalHeader>
      <ModalBody>
        {ar.map((num) => (
          <ListGroup
            key={num}
            id={"toggler".concat(num)}
            style={{ width: "100%", height: "100%" }}
          >
            <div
              className="justify-content-between"
              style={{ width: "100%", overflow: "" }}
            >
              <h1 className="btn  text-left text-wrap">
                {data.description[num]}
              </h1>
            </div>
            <UncontrolledCollapse toggler={"#toggler".concat(num)}>
              {data.detail[num] !== undefined ? (
                <Card style={{ width: "100%" }}>
                  <h1 className="text-center detail">{data.detail[num]}</h1>
                </Card>
              ) : (
                <div></div>
              )}
            </UncontrolledCollapse>
          </ListGroup>
        ))}
      </ModalBody>
    </Modal>
  );
};

export default Detail;
