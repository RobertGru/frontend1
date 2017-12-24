import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import MainView from './components/main'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <Header />
            <Switch>
              <Route exact path='/' component={MainView} />
            </Switch>
          </Col>
        </Row>


      </Container>
      </div>
    );
  }
}

export default App
