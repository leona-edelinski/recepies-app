import React from 'react';
import './App.css';
import RecepiesList from './components/RecepiesList';
import "materialize-css"
import 'materialize-css/dist/css/materialize.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RecepiesList />
    </div>
  );
}

export default App;
