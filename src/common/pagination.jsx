import React from "react";
import Link from "next/link";

const Pagination = ({ total, itemsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(total / itemsPerPage);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPaginationItems = () => {
    const visiblePages = 5;
    let startPage = currentPage - 2;
    if (startPage <= 1) {
      startPage = 1;
    }

    let endPage = startPage + visiblePages - 1;
    if (endPage >= totalPages) {
      endPage = totalPages;
      startPage =
        totalPages - visiblePages + 1 > 0 ? totalPages - visiblePages + 1 : 1;
    }

    const paginationItems = pageNumbers
      .slice(startPage - 1, endPage)
      .map((page) => (
        <li
          key={page}
          className={page === currentPage ? "pagination-select" : ""}
        >
          <Link href="#" onClick={() => setCurrentPage(page)}>
            {page}
          </Link>
        </li>
      ));

    if (endPage < totalPages) {
      paginationItems.push(
        <li key="end-ellipsis">
          ...{" "}
          <Link href="#" onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </Link>
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <div className="row pt-10">
      <div className="support-pagination col-xl-6 col-lg-6">
        <nav>
          <ul>
            <li>
              <Link href="#">
                <div
                  onClick={() => setCurrentPage(currentPage - 1)}
                  aria-disabled={currentPage <= 1 ? "true" : "false"}
                >
                  <i className="far fa-angle-left"></i>
                </div>
              </Link>
            </li>
            {renderPaginationItems()}
            <li>
              <Link href="#">
                <div
                  onClick={() => setCurrentPage(currentPage + 1)}
                  aria-disabled={currentPage >= totalPages ? "true" : "false"}
                >
                  <i className="far fa-angle-right"></i>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pt-20 pb-20 col-xl-6 col-lg-6">
        Viewing {Math.min((currentPage - 1) * itemsPerPage + 1, total)}–
        {Math.min(currentPage * itemsPerPage, total)} of {total} results
      </div>
    </div>
  );
};

export default Pagination;
