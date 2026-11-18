import {
  education,
  languages,
  person,
  projects,
  skillGroups,
  type Project,
} from "./data";
import ImageSlider from "./ImageSlider";

// Bilderna ligger i mappen public. BASE_URL gör att sökvägen
// blir rätt både på datorn och på GitHub Pages.
function imageUrl(path: string) {
  return import.meta.env.BASE_URL + path;
}

export default function App() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />

        <section id="projekt" className="section">
          <div className="container">
            <h2 className="section-title">Projekt</h2>
            {featured.map((project) => (
              <FeaturedProject key={project.title} project={project} />
            ))}
            <div className="project-grid">
              {others.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {person.name}
        </div>
      </footer>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          {person.name}
        </a>
        <nav className="nav">
          <a href="#om-mig">Om mig</a>
          <a href="#kompetenser">Kompetenser</a>
          <a href="#projekt">Projekt</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div>
          <p className="eyebrow">{person.title}</p>
          <h1>Hej, jag heter {person.name.split(" ")[0]}.</h1>
          <p className="hero-text">{person.intro}</p>
          <div className="buttons">
            <a className="button primary" href="#projekt">
              Se mina projekt
            </a>
            <a className="button" href="#kontakt">
              Kontakta mig
            </a>
          </div>
        </div>
        <img
          className="hero-phone"
          src={imageUrl("bilder/tolkappen/startsida.jpg")}
          alt="Startsidan i TolkAppen"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="om-mig" className="section">
      <div className="container narrow">
        <h2 className="section-title">Om mig</h2>
        {person.about.map((text) => (
          <p key={text} className="text">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="kompetenser" className="section tinted">
      <div className="container">
        <h2 className="section-title">Kompetenser</h2>
        <div className="skills">
          {skillGroups.map((group) => (
            <div key={group.title} className="card">
              <h3>{group.title}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="card">
            <h3>Utbildning</h3>
            {education.map((item) => (
              <p key={item.program} className="small">
                <strong>{item.program}</strong>
                <br />
                {item.school}
                {item.years && `, ${item.years}`}
              </p>
            ))}
            <h3 className="spaced">Språk</h3>
            <p className="small">{languages.join(", ")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="buttons">
      {project.links.map((link) => (
        <a
          key={link.url}
          className="button small-button"
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured card">
      <div className="featured-text">
        <span className="platform">{project.platform}</span>
        <p className="eyebrow">{project.subtitle}</p>
        <h3 className="project-title">{project.title}</h3>
        <Tags tags={project.tags} />
        {project.description.map((text) => (
          <p key={text} className="text">
            {text}
          </p>
        ))}
        <Links project={project} />
      </div>
      <ImageSlider
        images={project.images.map(imageUrl)}
        title={project.title}
      />
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      {project.images.length > 0 ? (
        <img
          className="project-image"
          src={imageUrl(project.images[0])}
          alt={`Skärmbild från ${project.title}`}
        />
      ) : (
        // Visas tills projektet har en bild.
        <div className="project-image placeholder">{project.title}</div>
      )}
      <span className="platform">{project.platform}</span>
      <p className="eyebrow">{project.subtitle}</p>
      <h3 className="project-title">{project.title}</h3>
      <Tags tags={project.tags} />
      {project.description.map((text) => (
        <p key={text} className="text">
          {text}
        </p>
      ))}
      <Links project={project} />
    </article>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section tinted">
      <div className="container narrow center">
        <h2 className="section-title">Kontakt</h2>
        <p className="text">
          Vill du veta mer om mig eller mina projekt? Skicka gärna ett mejl.
        </p>
        <div className="buttons centered">
          <a className="button primary" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a className="button" href={person.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {person.linkedin && (
            <a className="button" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
