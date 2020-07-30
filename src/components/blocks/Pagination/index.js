import React from "react";

import "./styles.css";

export default function Pagination({ pages, currentPage, onPageChange }) {
  return (
    <div className="Breadcrumbs">
      {Array(pages)
        .fill()
        .map((page, index) => {
          const currPage = index + 1;
          return (
            <span
              onClick={() => onPageChange(currPage)}
              className={currPage === currentPage ? "selected" : null}
              key={currPage}
            >
              {currPage}
            </span>
          );
        })}
    </div>
  );
}
