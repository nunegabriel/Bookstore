import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Books from './components/Books';
import Category from './components/Categories';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
