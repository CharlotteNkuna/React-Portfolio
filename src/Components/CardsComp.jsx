import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CardsComp() {
    return(
        <Container fluid className="mt-4">
        <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-4"> {/* bigger on small/medium screens */}
      <Card className="h-100">
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          style={{ height: '200px', objectFit: 'contain' }} // makes image bigger
        />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
            A powerful JavaScript library for building user interfaces.
            I use React to create dynamic and responsive web applications. 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title>Bootstrap</Card.Title>
          <Card.Text>
            A front-end toolkit that helps me design modern, responsive
            websites quickly with prebuilt components and utilities.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    <Col xs={12} md={6} lg={4} className="mb-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src="https://vitejs.dev/logo.svg"
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title>Vite</Card.Title>
          <Card.Text>
            A next-generation build tool that makes development fast
            and efficient. I use Vite for quick project setup and hot reloading.
          </Card.Text>
        </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}