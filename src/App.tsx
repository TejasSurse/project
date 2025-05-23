import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import CategoryPage from './pages/CategoryPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:categoryName" element={<CategoryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;