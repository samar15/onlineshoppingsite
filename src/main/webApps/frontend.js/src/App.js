import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar'
import LoginPage from './pages/LoginPage'
function App() {

  const marginTop={
marginTop:"50px"
  };
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <LoginPage/>
         </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
