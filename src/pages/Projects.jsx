import { ArrowSquareOut } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { projectsFor } from '../data/projects'
import { loc } from '../data/profile'
import SkillBadge from '../components/SkillBadge'
import PhIcon from '../components/PhIcon'
import './Projects.css'

export default function Projects() {
  const { t, lang } = useLanguage()
  const researchProjects = projectsFor('research')

  return (
    <div className="projects">
      <h1 className="section-title">{t('proj_title')}</h1>
      <p className="section-subtitle">{t('proj_subtitle')}</p>

      <div className="projects-grid">
        {researchProjects.map((project, i) => (
          <article key={i} className="project-card">
            <div className="project-header">
              <div className="project-icon">
                <PhIcon name={project.icon} size={24} weight="duotone" />
              </div>
              <div>
                <h3 className="project-name">{loc(project.name, lang)}</h3>
                <span className="project-company">{loc(project.company, lang)}</span>
              </div>
            </div>
            <p className="project-description">{loc(project.description, lang)}</p>
            <div className="project-techs">
              {project.technologies.map((tech, j) => (
                <SkillBadge key={j} label={tech} />
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline project-link"
              >
                <ArrowSquareOut size={14} weight="bold" />
                {t('proj_visit')}
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
