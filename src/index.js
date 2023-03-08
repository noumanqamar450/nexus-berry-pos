import React from 'react';
import ReactDOM from 'react-dom/client';
import POSApp from './Pages/POSApp';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Container>
      <POSApp />
    </Container>
  </React.StrictMode>
);

