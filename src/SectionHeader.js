import React from 'react'
import { Container } from "react-bootstrap";

function SectionHeader(props) {
  return (
    <Container className="text-center my-4">
      <h6>{props.header}</h6>
      <hr className="w-90 mx-auto text-dark" />
    </Container>
  )
}

export default SectionHeader