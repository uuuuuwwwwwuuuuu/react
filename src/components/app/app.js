import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {

  state = {
    randomCharActive: false,
    randomCharContent: <RandomChar />,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  toggleRandomCharActive = () => {
    this.setState(({randomCharActive}) => ({
      randomCharActive: !randomCharActive
    }));

    if (this.state.randomCharActive) {
      this.setState({randomCharContent: <RandomChar />});
    } else {
      this.setState({randomCharContent: null})
    }
  };

  render() {

    if (this.state.error) {
      return <ErrorMessage message={'App destroyed, try later'} />
    }

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 6, offset: 3 }} className='d-flex flex-column'>
              {this.state.randomCharContent}
              
              <Button outline color="info" onClick={this.toggleRandomCharActive}>
                Toggle enable random character block
              </Button>
            </Col>
          </Row>
          <CharacterPage />
          {/* <Row className="mt-4">
            <Col md="6">
              <ItemList onSelected={this.onCharSelected}/>
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar}/>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md="6">
              <ItemList onSelected={this.onCharSelected}/>
            </Col>
            <Col md="6">
              <CharDetails charId={this.state.selectedChar}/>
            </Col>
          </Row> */}
        </Container>
      </>
    );
  }
}
