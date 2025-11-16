import { useState, useEffect } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Skills</h2>

      {skills.length === 0 && <p>Mengambil data dari API...</p>}

      {skills.map((skill) => (
        <div
          key={skill.id}
          style={{
            padding: "10px",
            background: "#d1e0ff",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        >
          {skill.name}
        </div>
      ))}
    </div>
  );
}

export default Skills;
