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
        borderRadius: 18,
        border: "none",
        cursor: "pointer",

        color: "#fff",
        fontWeight: 700,
        fontSize: 17,

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
