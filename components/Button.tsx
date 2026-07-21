interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "100%",
        padding: "18px",
        border: "none",
        borderRadius: 18,
        cursor: "pointer",

        fontSize: 17,
        fontWeight: 700,
        color: "#fff",

        background:
          "linear-gradient(135deg,#7C3AED,#9333EA)",

        boxShadow:
          "0 0 30px rgba(124,58,237,.45)",

        transition: ".25s",
      }}
    >
      {children}
    </button>
  );
}
