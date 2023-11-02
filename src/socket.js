import React, { useEffect, useState } from 'react';
import { websocketURL } from './config.js';
import { Form, InputGroup, Button, Card } from 'react-bootstrap';

const WebSocketExample = () => {
  const [message, setMessage] = useState('');
  const [echoResponse, setEchoResponse] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const newWs = new WebSocket(websocketURL);
    setWs(newWs);

    newWs.onopen = () => {
      console.log('WebSocket connected');
    };

    newWs.onmessage = (event) => {
      console.log('Received message:', event.data);
      setEchoResponse(event.data);
    };

    newWs.onclose = (event) => {
      console.log(`WebSocket closed: ${event.code} - ${event.reason}`);
    };

    return () => {
      if (newWs) {
        newWs.close();
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (ws) {
      console.log('WebSocket is available');
      ws.send(inputMessage);
    }
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter a message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />

        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </InputGroup>

      <Card>
        <Card.Body>
          <Card.Title>Response</Card.Title>
          <Card.Text>{echoResponse}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default WebSocketExample;
