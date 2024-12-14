function SVGIcon({ name, ...attr }) {
  return (
    <svg {...attr}>
      <use href={`#${name}`}></use>
    </svg>
  );
}

export default SVGIcon;
