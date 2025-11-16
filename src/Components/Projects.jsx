import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); 
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>My Projects</h2>

      {projects.length === 0 && <p>Sedang mengambil data dari API...</p>}

      {projects.map((project) => (
        <div
          key={project.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3 style={{ fontSize: "22px" }}>{project.title}</h3>
          <p>{project.desc}</p>
          <a href={project.link} target="_blank">
            Kunjungi
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
