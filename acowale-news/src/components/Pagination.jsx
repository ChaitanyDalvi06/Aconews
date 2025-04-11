import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
