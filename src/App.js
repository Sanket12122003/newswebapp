import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Your components and content go here */}
          <Navbar toggleMode={this.toggleMode} />
  
          {/* Define and render your routes */}
          <Routes>
            <Route path="/" element={<News key="genral" pageSize={6} country='in' category="general"/>} />
            <Route path="/business" element={<News key="business" pageSize={6} country='in' category="business"/>} />
            <Route path="/health" element={<News key="health" pageSize={6} country='in' category="health"/>} />
            <Route path="/science" element={<News key="science" pageSize={6} country='in' category="science"/>} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country='in' category="technology"/>} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country='in' category="entertainment"/>} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country='in' category="sports"/>} />
            {/* ... other routes */}
          </Routes>
        </div>
      </Router>
    );
  }

  toggleMode() {
    // Define your toggleMode logic here
    // This function should be implemented
  }
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const router = (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  createRoot(rootElement).render(router);
}
export default App;