import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container fluid>
        <Row>
          <Col>

            <Header />
          </Col>
        </Row>


      </Container>
      </div>
    );
  }
}

export default App
