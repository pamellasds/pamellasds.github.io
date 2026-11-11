import { ArrowSquareOut } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { portfolioItems } from '../data/portfolio'
import { projectsFor } from '../data/projects'
import { loc } from '../data/profile'
import SkillBadge from '../components/SkillBadge'
import PhIcon from '../components/PhIcon'
import './Portfolio.css'
import './Projects.css'

export default function Portfolio() {
  const { t, lang } = useLanguage()
  const otherProjects = projectsFor('industry')

  return (
    <div className="portfolio">
      <h1 className="section-title">{t('portfolio_title')}</h1>
      <p className="section-subtitle">{t('portfolio_subtitle')}</p>

      <div className="portfolio-list">
        {portfolioItems.map(item => (
          <article key={item.id} className="portfolio-card">
            <div className="portfolio-card-top">
              <div className="portfolio-card-icon" aria-hidden>
                <PhIcon name={item.icon} size={28} weight="duotone" />
              </div>
              <div className="portfolio-card-heading">
                <h3 className="portfolio-card-name">{loc(item.name, lang)}</h3>
                <span className="portfolio-card-label">{loc(item.label, lang)}</span>
              </div>
            </div>

            <p className="portfolio-card-description">{loc(item.description, lang)}</p>

            <div className="portfolio-card-techs">
              {item.technologies.map((tech, j) => (
                <SkillBadge key={j} label={tech} />
              ))}
            </div>

            <div className="portfolio-features-head">
              <span>{t('portfolio_features')}</span>
            </div>
            <div className="portfolio-features-scroll" tabIndex={0}>
              {item.features.map((feature, j) => (
                <div key={j} className="portfolio-feature">
                  <div className="portfolio-feature-icon">
                    <PhIcon name={feature.icon} size={22} weight="duotone" />
                  </div>
                  <h4 className="portfolio-feature-title">{loc(feature.title, lang)}</h4>
                  <p className="portfolio-feature-text">{loc(feature.text, lang)}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <h2 className="portfolio-block-title portfolio-block-title--spaced">
        {t('portfolio_projects_title')}
      </h2>
      <p className="portfolio-intro">{t('portfolio_projects_intro')}</p>

      <div className="projects-grid">
        {otherProjects.map((project, i) => (
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
