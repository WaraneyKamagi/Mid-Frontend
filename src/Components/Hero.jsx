const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#2563eb",
        color: "white",
        justifyContent: "center",
        gap: "40px",
      }}
    >

      <img
        src="/waraney.jpg"
        alt="My Profile"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "100%",
          objectFit: "cover",
          border: "4px solid white",
        }}
      />

      <div>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}>
          Waraney Kamagi
        </h1>
        <p style={{ fontSize: "20px", opacity: "0.9" }}>
          Seorang Mahasiswa yang sedang belajar Front-End Development di kelas Sir Stenly Adam.
        </p>
      </div>
    </div>
  );
};

export default Hero;
