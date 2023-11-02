import React, { useState } from 'react';
import api from './apiService';
import { useNavigate } from 'react-router-dom';
import { setUser } from './userActions';
import { useDispatch } from 'react-redux';

import { useMutation, gql, useApolloClient } from '@apollo/client'; 


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useMutation(
    gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
        }
      }
    `
  );

  const handleLogin = async () => {
    try {
      //const response = await api.post('/login', { email, password });
      //const { token } = response.data;
      const response = await api.post('http://localhost:8000/graphql', {
        query: `
          mutation {
            login(email: "${email}", password: "${password}") {
              token
            }
          }
        `,
      });
      console.log('Ответ от сервера:', response.data.data.login.token);

      //const response = await login({ variables: { email, password } });
      const { token } = response.data.data.login.token;

      dispatch(setUser(email));
      
      Notification.requestPermission(function(permission){
        console.log('Результат запроса прав:', permission);
        if (permission === "granted") {
          var notification = new Notification('Сколько',
          { body: 'Только ты!'});
          
          }
        });
        if (response.data.data.login.token !== null) {
      navigate('/home');}
    } catch (err) {
      setError('Неверное имя пользователя или пароль.');
    }
  };
  
  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Login;
