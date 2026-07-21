export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 13,
            color: "#8e8ea0",
            marginBottom: 6,
          }}
        >
          Добро пожаловать 👋
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: 34,
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          NOVA
        </h1>
      </div>

      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 18,
          background:
            "linear-gradient(135deg,#7c3aed,#9333ea)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 24,
          boxShadow: "0 0 35px rgba(124,58,237,.45)",
        }}
      >
        🚀
      </div>
    </header>
  );
}
