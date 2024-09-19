import React from 'react';
import NewsCard from '../components/NewsCard';
import Pagination from '../components/Pagination';

const Home = ({ news, currentPage, setCurrentPage, totalPages, setQuery }) => {
  return (
    <div>
      <h1>Welcome to Acowale News</h1>
      <input
        type="text"
        placeholder="Search news..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setCurrentPage(1)}>Search</button>

      <div className="news-grid">
        {news.length > 0 ? (
          news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No news articles found.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Home;
