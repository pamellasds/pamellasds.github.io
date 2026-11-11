import { useLanguage } from '../i18n/LanguageContext'
import { projectsFor } from '../data/projects'
import { loc } from '../data/profile'

export default function ProjectsSection({ id, track, kicker }) {
  const { t, lang } = useLanguage()
  const items = projectsFor(track)

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('proj_title')}</h2>
        <span className="section-kicker">{kicker}</span>
      </div>
      <div className="project-grid">
        {items.map((project) => {
          const name = loc(project.name, lang)
          return (
            <article className="project" key={name}>
              <h3 className="project-name">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {name} ↗
                  </a>
                ) : (
                  name
                )}
              </h3>
              <p className="project-co">{loc(project.company, lang)}</p>
              <p className="project-desc">{loc(project.description, lang)}</p>
              <div className="tags">
                {project.technologies
                  .filter((tech) => tech !== 'UI' && tech !== 'Tailwind' && tech !== 'GitHub')
                  .map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
