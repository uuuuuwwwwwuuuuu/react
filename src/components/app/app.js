import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

export default class App extends Component {

  state = {
    randomCharActive: false,
    randomCharContent: <RandomChar />
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
          <Row className="mt-4">
            <Col md="6">
              <ItemList />
            </Col>
            <Col md="6">
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
