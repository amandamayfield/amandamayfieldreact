import "./navButton.scss";

interface NavButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function NavButton({
  isOpen,
  onClick,
}: NavButtonProps) {
  return (
    <button
      className="nav-btn"
      aria-label="Toggle navigation menu"
      onClick={onClick}
    >
      <span className={`${isOpen ? "open" : ""}`}></span>
    </button>
  );
}
