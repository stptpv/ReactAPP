import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Logo() {
    return (
        <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <Image src="/rock.png" rounded width="35" height="35" />
          </Col>
        

          <Col md={{ span: 11, offset: 0 }}><h2>Blog name</h2></Col>
        </Row>
      </Container>
      

      
  );
}

