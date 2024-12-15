function Loading({ fill, width, height }) {
  return (
    <svg
      width={width || "32"}
      height={height || "24"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "#a1a3a8"}
    >
      <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 1 1 9)">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values="1;.6;.3;1"
          calcMode="linear"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 1 9 9)">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values=".6;.3;1;.6"
          calcMode="linear"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle cx="3" cy="3" r="3" transform="matrix(1 0 0 1 17 9)">
        <animate
          attributeName="opacity"
          dur="1.2s"
          values=".3;.6;1;.3"
          calcMode="linear"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );
}

export default Loading;
