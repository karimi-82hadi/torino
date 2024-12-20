import styles from "./Loading.module.css";

function Loading({ fill, width, height }) {
  return (
    <svg
      width={width || "32"}
      height={height || "24"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill || "#a1a3a8"}
    >
      <circle
        cx="3"
        cy="3"
        r="3"
        transform="matrix(1 0 0 1 1 9)"
        className={styles.Loading_Circle1}
      />
      <circle
        cx="3"
        cy="3"
        r="3"
        transform="matrix(1 0 0 1 9 9)"
        className={styles.Loading_Circle2}
      />
      <circle
        cx="3"
        cy="3"
        r="3"
        transform="matrix(1 0 0 1 17 9)"
        className={styles.Loading_Circle3}
      />
    </svg>
  );
}

export default Loading;
