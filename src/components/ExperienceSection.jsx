import { useLanguage } from '../i18n/LanguageContext'
import { experiences } from '../data/experiences'
import { loc } from '../data/profile'

export default function ExperienceSection({ id }) {
  const { t, lang } = useLanguage()

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('exp_title')}</h2>
        <span className="section-kicker">{t('kicker_roles')}</span>
      </div>
      <div className="exp-list">
        {experiences.map((exp) => (
          <article className="exp-item" key={`${exp.company}-${exp.period}`}>
            <div className="exp-period">
              {exp.period}
              {exp.current && <span className="now">{t('exp_current')}</span>}
            </div>
            <div>
              <h3 className="exp-role">{loc(exp.role, lang)}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-loc">{loc(exp.location, lang)}</p>
              <ul className="exp-bullets">
                {(loc(exp.description, lang) || []).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tags">
                {exp.technologies.map((tech) => (
                  <span className="tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
