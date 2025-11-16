import { useState, useEffect } from "react";

function Hobi() {
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/hobbies")
      .then((res) => res.json())
      .then((data) => {
        setHobbies(data);
      });
  }, []);

  return (
    <div style={{ padding: "40px", backgroundColor: "#f0f0f0" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Hobi</h2>

      {hobbies.length === 0 && <p>Mengambil data dari API...</p>}

      {hobbies.map((hobi) => (
        <div
          key={hobi.id}
          style={{
            padding: "10px",
            background: "white",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          {hobi.name}
        </div>
      ))}
    </div>
  );
}

export default Hobi;
