import React from "react";
import "./Breadcrumbs.css";

export default function Breadcrumbs({ pages, currentPage, onPageChange }) {
  const breadcrumbs = [];

  for (let i = 1; i <= pages; i++) {
    breadcrumbs.push(
      <span
        onClick={() => onPageChange(i)}
        className={currentPage === i ? "selected" : null}
        key={i}
      >
        {i}
      </span>
    );
  }

  return <div className="Breadcrumbs">{breadcrumbs}</div>;
}
