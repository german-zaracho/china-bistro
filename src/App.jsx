import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/home/Home.jsx';
import Menu from './views/menu/Menu.jsx';
import About from './views/about/About.jsx';
import Awards from './views/awards/Awards.jsx';
import Category from './views/menu/category/Category.jsx';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/category/:short_name" element={<Category />} />
            </Routes>
        </div>
    );
}

export default App;
