export default function Hero() {
  return (
    <>
      <div
        style={{
          width: 88,
          height: 88,
          margin: "50px auto 30px",
          borderRadius: 24,

          background:
            "linear-gradient(135deg,#7C3AED,#5B21B6)",

          boxShadow:
            "0 0 50px rgba(124,58,237,.5)",
        }}
      />

      <h1
        style={{
          textAlign: "center",
          fontSize: 40,
          fontWeight: 900,
          color: "#fff",
          letterSpacing: 1,
        }}
      >
        NOVA
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#A1A1AA",
          marginTop: 16,
          lineHeight: 1.7,
          fontSize: 17,
        }}
      >
        Разработка Telegram-ботов
        <br />
        и Mini Apps
      </p>
    </>
  );
}
