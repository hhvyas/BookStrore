import React from "react";
import "./css/Pagination.css";
function Footer(props) {

  const { numberOfPages, handlePageChange, currentPage } = props
  // console.log(numberOfPages, 'pages')
  return (
    <div className="pagination">
      <div className="pagination-buttons">
        <div className="pagination-buttons-previous">
          <button id={`${currentPage === 1 ? 'disabledButton' : ''}`} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt; Prev</button>
        </div>
        <div className={`pagination-buttons-pages`}>
          {numberOfPages.map((page) => (
            <button id={`${currentPage === page ? 'activePaginationPage' : ''}`} key={page} onClick={() => handlePageChange(page)}>{page}</button>
          ))}
        </div>
        <div className="pagination-buttons-next">
          <button id={`${currentPage ===  numberOfPages.length ? 'disabledButton' : ''}`} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === numberOfPages.length}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
