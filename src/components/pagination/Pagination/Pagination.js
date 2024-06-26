import React from "react";
import styles from "./Pagination.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = (props) => {
  let nav = [];
  props.data.forEach((item, index) => {
    if (item === "...") {
      nav.push(
        <div className={styles.Chevron}>
          <span className="relative inline-flex items-center px-4 py-2">
            ...
          </span>
        </div>
      );
    } else {
      nav.push(
        <a
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            if (props.onChangePage && props.actualPage !== item)
              props.onChangePage(item);
          }}
          aria-current="page"
          className={`z-10 relative inline-flex items-center px-4 py-2  text-sm font-medium ${
            props.actualPage === item ? styles.current : ""
          }`}
        >
          {item}
        </a>
      );
    }
  });

  return (
    <div className={styles.Pagination}>
      <div className=" px-4 py-3 flex items-center justify-between  sm:px-6">
        <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <div className={styles.Chevron}>
                <a
                  href="http"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md  "
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              {nav}

              <div className={styles.Chevron}>
                <a
                  href="http"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md "
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
