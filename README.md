Добро пожаловать в руководство по эксплуатации!

Для запуска проекта на своем устройстве вам необходимо выполнить
следующие пункты:

1.Требования. 
  Установите необходимы компоненты:
  
    NPM
    Node.js
    React

  А также зависимости для React:
  
    "@apollo/client": "^3.8.6",
    "@reduxjs/toolkit": "^1.9.7",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/redux-logger": "^3.0.10",
    "axios": "^1.5.1",
    "bootstrap": "^5.3.2",
    "graphql": "^16.8.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.0",
    "react-devtools": "^4.28.4",
    "react-dom": "^18.2.0",
    "react-push-notification": "^1.5.3",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.16.0",
    "react-scripts": "5.0.1",
    "redux": "^4.2.1",
    "redux-devtools-extension": "^2.13.9",
    "redux-logger": "^3.0.6",
    "web-vitals": "^2.1.4",
    "websocket": "^1.0.34"

2. Установите следующий сервис:

   https://github.com/stptpv/JWT-service

3.Запуск. 

   Для успешного запуска введите в терминале следующую команду для проекта:
     npm start
   Для успешного запуска введите в терминале следующую команду для сервиса:
     npm run start-auth

4.Авторизация.

   Для проверки можете использовать следующие данные:
     bruno@email.com
     bruno

5.Для запуска проекта из под Docker:
  docker build -t getting-started .
  docker run -dp 3000:3000 getting-started   
