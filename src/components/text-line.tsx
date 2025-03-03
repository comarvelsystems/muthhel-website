interface Props {
  className?: string;
}

const TextLine = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="212px"
    height="27"
    fill="none"
    viewBox="0 0 212 27"
    className={className}
  >
    <path
      strokeWidth="14"
      d="M211 8.312c-53-2.333-168.8-3.2-208 12"
      className="stroke-primary dark:stroke-primary-second"
    ></path>
  </svg>
);

export default TextLine;
