import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage/characterPage";
import ErrorMessage from "../errorMessage/errorMessage";
import GetResource from "../../services/getResource";
import HousePage from "../housePage/housePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    randomCharActive: false,
    randomCharContent: <RandomChar />,
    error: false
  }

  service = new GetResource()

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
      <Router>
        <div className="app">
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
            <Routes>
              <Route path="/characters" exact element={<CharacterPage />} /> {/* exact - что бы он искал именно этот путь */}
              <Route path="/houses" exact element={<HousePage />} />
            </Routes>
          </Container>
        </div>
      </Router>
    );
  }
}
