/*import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '.src/components/Navbar'; 
import Home from './pages/Home';         
import About from './pages/About';       
import Contact from './pages/Contact';  
import Login from './pages/Login'; 

function App() {
  const [pic, setPic] = useState("");

  useEffect(() => {
    fetch("https://your-api-endpoint.com") 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPic(data.message); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;*/