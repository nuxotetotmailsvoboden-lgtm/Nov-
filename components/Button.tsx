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
        height: 58,
        borderRadius: 18,
        border: "none",
        color: "#fff",
        fontWeight: 700,
        fontSize: 16,
        cursor: "pointer",
        background:
          "linear-gradient(135deg,#7c3aed,#9333ea)",
        boxShadow:
          "0 0 30px rgba(124,58,237,.45)",
        transition: ".25s",
      }}
    >
      {children}
    </button>
  );
}
