import React, {Component} from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import GetResource from "../../services/getResource";

export default class CharacterPage extends Component {
  
  service = new GetResource();

  state = {
    selectedChar: null,
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  onCharSelected = (selectedChar) => {
    this.setState({selectedChar});
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage message={'Character page destroyed, try later'} />
    }

    return (
      <Row className="mt-4">
        <Col md="6">
          <ItemList 
          getData={this.service.getAllCharacters}
          onSelected={this.onCharSelected}/>
        </Col>
        <Col md="6">
          <CharDetails charId={this.state.selectedChar}/>
        </Col>
      </Row>
    )
  }
}

