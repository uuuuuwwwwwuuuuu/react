import React, {Component} from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class CharacterPage extends Component {

  state = {
    selectedChar: 130,
  }

  onCharSelected = (selectedChar) => {
    this.setState({selectedChar});
  }

  render() {
    return (
      <Row className="mt-4">
        <Col md="6">
          <ItemList onSelected={this.onCharSelected}/>
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar}/>
        </Col>
      </Row>
    )
  }
}

