import React, { useEffect, useState } from 'react';
import { websocketURL } from './config.js';

const WebSocketExample = () => {
  const [message, setMessage] = useState(''); // Состояние для хранения сообщения и ответа
  const [echoResponse, setEchoResponse] = useState('');

  useEffect(() => {
    const ws = new WebSocket(websocketURL);

    ws.onopen = () => {
      console.log('WebSocket connected');
      // Отправить команду "echo" после установки соединения
      ws.send('echo Hello, World!');
    };

    ws.onmessage = (event) => {
      console.log('Received message:', event.data);
      setEchoResponse(event.data); // Сохранить ответ в состоянии
    };

    ws.onclose = (event) => {
      console.log(`WebSocket closed: ${event.code} - ${event.reason}`);
    };

    return () => {
      // Закрыть вебсокетное подключение при размонтировании компонента
      ws.close();
    };
  }, []);

  return (
    <div>
      <p>WebSocket Example</p>
      <p>Response: {echoResponse}</p>
    </div>
  );
};

export default WebSocketExample;
