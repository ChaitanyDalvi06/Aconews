import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Loading from './components/Loading';
import { fetchNews } from './services/gnewsApi';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNews(query, currentPage);
        setNews(data.articles || []); // Default to empty array if articles are undefined
        setTotalPages(Math.ceil(data.totalArticles / 10)); // Handle cases where totalArticles might be undefined
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]); // Ensure news is an empty array in case of error
      }
    };
    loadNews();
  }, [query, currentPage]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              news={news}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              setQuery={setQuery}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
