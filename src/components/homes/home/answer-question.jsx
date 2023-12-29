import React, { useEffect, useState } from "react";
import answer_question_data from "@/src/data/answer-question-data";
import Pagination from "@/src/common/pagination";

const AnswerQuestion = ({ style, categoryId }) => {
  const [shadow, setShadow] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const filteredData = answer_question_data.filter(
    (item) => item.category_id === categoryId
  );

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the filteredData for pagination
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId]);

  return (
    <>
      <div className="tp-custom-accordion">
        <div
          className={`accordion ${style && "tp-inner-font"}`}
          id="accordionExample"
        >
          {currentItems.map((item) => (
            <div
              onClick={() => setShadow(item.id)}
              key={item.id}
              className={`accordion-items ${item.show} ${
                shadow === item.id && "tp-faq-active"
              }`}
            >
              <h2 className="accordion-header" id={item.accordion_id}>
                <button
                  className={`accordion-buttons ${item.collapsed}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={item.data_bs_target}
                  aria-expanded={item.aria_expanded}
                  aria-controls={item.aria_controls}
                >
                  {item.question}
                  <span className="accordion-btn"></span>
                </button>
              </h2>
              <div
                id={item.aria_controls}
                className={`accordion-collapse collapse ${
                  item.show ? "show" : ""
                }`}
                aria-labelledby={item.accordion_id}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        total={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default AnswerQuestion;
