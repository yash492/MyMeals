import React from "react";

function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
      width="105"
      height="105"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle cx="30" cy="50" r="20" fill="#73bb0f">
        <animate
          attributeName="cx"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
      </circle>
      <circle cx="70" cy="50" r="20" fill="#ffd538">
        <animate
          attributeName="cx"
          begin="0s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
      </circle>
      <circle cx="30" cy="50" r="20" fill="#73bb0f">
        <animate
          attributeName="cx"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;0.5;1"
          repeatCount="indefinite"
          values="30;70;30"
        ></animate>
        <animate
          attributeName="fill-opacity"
          calcMode="discrete"
          dur="1s"
          keyTimes="0;0.499;0.5;1"
          repeatCount="indefinite"
          values="0;0;1;1"
        ></animate>
      </circle>
    </svg>
  );
}

export default LoadingIcon;
