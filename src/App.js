import 'bootstrap/dist/css/bootstrap.min.css';

import Navibar from './components/Navibar'
import Logo from './components/Logo'

import {Home} from './Home';
import {About} from './About';
import Login from './Login';
import WebSocketExample from './socket';

import { ApolloProvider } from '@apollo/client';
import { client } from '../src/apollo'; // Пусть 'client' будет вашим клиентом Apollo

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
      <>
      <Router>
      <ApolloProvider client={client}>

      <Logo/>
      <Navibar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route exact path="/" element={<Login />}/>

        <Route path="/socket" element={<WebSocketExample />}/>

      </Routes>
      </ApolloProvider>

      </Router>
      </>
    );
}

export default App;
