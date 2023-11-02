import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import WebSocketExample from './socket'
export const About = () => {
    return (
        <Container className="mt-4">
          <Row>
            <Col md={6}>
              <h1>About Us</h1>
              <p>Welcome to our About Page! We are a fantastic company doing amazing things.</p>
              <p>
                Our mission is to provide innovative solutions that make people's lives better. We are
                passionate about technology and committed to delivering high-quality products and
                services.
              </p>
              <p>Contact us at info@example.com for more information.</p>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Team</Card.Title>
                  <Card.Text>
                    Meet our talented team of professionals who work tirelessly to bring you the best
                    products and services.
                  </Card.Text>
                </Card.Body>
              </Card>
              <WebSocketExample></WebSocketExample>
            </Col>
          </Row>
        </Container>
      );}