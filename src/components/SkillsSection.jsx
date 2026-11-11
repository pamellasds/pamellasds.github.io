import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function SkillsSection({ id }) {
  const { t } = useLanguage()
  const rows = [
    { key: 'blockchain', label: t('skills_blockchain'), items: profile.skills.blockchain },
    { key: 'webDev', label: t('skills_webdev'), items: profile.skills.webDev },
    { key: 'tools', label: t('skills_tools'), items: profile.skills.tools },
    { key: 'research', label: t('skills_research'), items: profile.skills.research },
    { key: 'other', label: t('skills_other'), items: profile.skills.other },
  ]

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('skills_title')}</h2>
        <span className="section-kicker">{t('kicker_stack')}</span>
      </div>
      <div className="skills-stack">
        {rows.map((row) => (
          <div className="skill-row" key={row.key}>
            <div className="skill-label">{row.label}</div>
            <div className="tags">
              {row.items.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
