import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={
          <>
            <div>Hello World!!!</div>
          </>}
        />
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}
export default App;
