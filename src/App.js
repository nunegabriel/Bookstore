import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Add from './components/Add';
import Categories from './components/Categories';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Add" element={<Add />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
