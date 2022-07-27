import React from "react";

import styles from "./ButtonMore.module.scss";

const ButtonMore = () => (
  <div className={styles.ButtonMore} data-testid="ButtonMore">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.0008 39.1969C25.0929 39.1969 29.9765 37.174 33.5772 33.5733C37.1779 29.9726 39.2008 25.089 39.2008 19.9969C39.2008 14.9047 37.1779 10.0211 33.5772 6.42043C29.9765 2.81973 25.0929 0.796875 20.0008 0.796875C14.9086 0.796875 10.025 2.81973 6.42433 6.42043C2.82363 10.0211 0.800781 14.9047 0.800781 19.9969C0.800781 25.089 2.82363 29.9726 6.42433 33.5733C10.025 37.174 14.9086 39.1969 20.0008 39.1969ZM22.4008 12.7969C22.4008 12.1604 22.1479 11.5499 21.6978 11.0998C21.2478 10.6497 20.6373 10.3969 20.0008 10.3969C19.3643 10.3969 18.7538 10.6497 18.3037 11.0998C17.8536 11.5499 17.6008 12.1604 17.6008 12.7969V17.5969H12.8008C12.1643 17.5969 11.5538 17.8497 11.1037 18.2998C10.6536 18.7499 10.4008 19.3604 10.4008 19.9969C10.4008 20.6334 10.6536 21.2438 11.1037 21.6939C11.5538 22.144 12.1643 22.3969 12.8008 22.3969H17.6008V27.1969C17.6008 27.8334 17.8536 28.4438 18.3037 28.8939C18.7538 29.344 19.3643 29.5969 20.0008 29.5969C20.6373 29.5969 21.2478 29.344 21.6978 28.8939C22.1479 28.4438 22.4008 27.8334 22.4008 27.1969V22.3969H27.2008C27.8373 22.3969 28.4478 22.144 28.8978 21.6939C29.3479 21.2438 29.6008 20.6334 29.6008 19.9969C29.6008 19.3604 29.3479 18.7499 28.8978 18.2998C28.4478 17.8497 27.8373 17.5969 27.2008 17.5969H22.4008V12.7969Z"
        fill="#495ECA"
      />
    </svg>
  </div>
);

export default ButtonMore;
