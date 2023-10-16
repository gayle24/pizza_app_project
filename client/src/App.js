import React from 'react';
import { Route, BrowserRouter as Router, NavLink, Routes } from 'react-router-dom';
import Form from './components/Form';
import UserList from './components/UserList';
import PizzaList from './components/PizzaList';
import ToppingList from './components/ToppingList';
import './App.css';

function App() {
  const backgroundStyle = {
    backgroundImage: `url('https://img.freepik.com/free-photo/close-up-delicious-pizza_23-2150852113.jpg?size=626&ext=jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '98vh',
    width: 'auto', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'initial',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '25px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontStyle: 'italic',
    wordSpacing: '2px',
  };
  return (
    <div style={backgroundStyle}>
      <Router>
        <span className='logo'> Welcome to the Pizza App </span>
        <nav>
          {/* <NavLink to={`/`}>Home</NavLink> */}
          <NavLink to={`/form`}>Login</NavLink>
          <NavLink to={`/userlist`}>Profile</NavLink>
          <NavLink to={`/pizzalist`}>Pizzas</NavLink>
          <NavLink to={`/toppinglist`}>Toppings</NavLink>
        </nav>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/pizzalist" element={<PizzaList />} />
          <Route path="/toppinglist" element={<ToppingList />} />
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

