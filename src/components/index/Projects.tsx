import { ProjectsList } from "constantsObjects/projects";

export default function Projects() {
  const projects = ProjectsList.filter(e => e.id >= 0).reverse();

  return (
    <>
      <div className="container-fluid p-3" style={{ background: "#FFFFFF" }} id="projects">
        <div className="container mt-4 mb-1">
          <div className="row d-flex" >
            <div className="col-4 col-lg-8">
              <h4 className="pt-1" data-aos="fade-right">Projetos</h4>
            </div>
          </div>

          <div className="row mt-3" data-aos="fade-up">
          
            {projects.map((project) => (
              <div key={project.id} className="col-xl-3 col-md-5 col-sm-8 pb-4">
                <a href={project.link} target="_blank" rel="noreferrer" aria-label={project.titulo} style={{ textDecoration: "none" }}>
                <div className="card cards shadow">
                  <div className="card-img-top">
                    {project.foto}
                  </div>
                  <div className="card-body rounded-bottom">
                    <h4 className="card-title card-titulo">{project.titulo}</h4>
                    <p style={{ opacity: "0.5" }} className="card-text texto-corrido">
                        {project.paragrafo}
                    </p>
                  </div>
                </div>
                </a>
              </div>

            ))}
          </div>
        </div>
      </div>
    </>
  );
}
