interface Props {
  children: React.ReactNode;
}

export default function AppContainer({ children }: Props) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#4c1d95 0%,#140b25 35%,#07070b 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 430,
          padding: 20,
          paddingBottom: 120,
        }}
      >
        {children}
      </div>
    </main>
  );
}
