import React from "react";
import { Col, Row } from "reactstrap";

const RowBlock = ({left, right}) => {
  return (
    <Row className="mt-4">
      <Col md="6">
        {left}
      </Col>
      <Col md="6">
        {right}
      </Col>
    </Row>
  )
}

export default RowBlock;