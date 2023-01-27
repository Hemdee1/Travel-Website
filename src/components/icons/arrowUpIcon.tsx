const ArrowUpIcon = ({ value }: { value: number }) => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8.5L8 1.5L15 8.5"
        stroke={value === 0 ? "#BCB7C2" : "#3E2E4D"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowUpIcon;
