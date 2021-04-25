import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {

  const marginTop={
marginTop:"50px"
  };
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
           <Switch>
            <Route path="/about" exact component={LoginPage}/>
            <Route path="/products" exact component={LoginPage}/>
            <Route path="/contact" exact component={LoginPage}/>
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/register" exact component={LoginPage}/>
           </Switch>
         </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
