import { useLanguage } from '../i18n/LanguageContext'
import { profile, loc } from '../data/profile'

export default function AboutSection({ id }) {
  const { t, lang } = useLanguage()

  const langLevel = (level) => {
    if (level === 'Native') return t('lang_native')
    if (level === 'B2') return t('lang_b2')
    return level
  }

  const langName = (name) => {
    if (name === 'Portuguese') return t('lang_portuguese')
    if (name === 'English') return t('lang_english')
    return name
  }

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('about_title')}</h2>
        <span className="section-kicker">{t('kicker_profile')}</span>
      </div>
      <div className="about-grid">
        <div>
          <p className="about-lead">{loc(profile.summary, lang)}</p>
          <h3 className="about-edu-title">{t('about_education')}</h3>
          {profile.education.map((edu) => (
            <div className="edu-item" key={loc(edu.degree, lang)}>
              <p className="edu-degree">{loc(edu.degree, lang)}</p>
              <p className="edu-meta">
                {loc(edu.institution, lang)} · {edu.period}
              </p>
              {edu.note && <p className="edu-note">{loc(edu.note, lang)}</p>}
            </div>
          ))}
        </div>
        <aside>
          <div className="side-block">
            <h3>{t('about_research_interests')}</h3>
            <ul className="interest-list">
              {profile.researchInterests.map((interest) => (
                <li key={loc(interest, lang)}>{loc(interest, lang)}</li>
              ))}
            </ul>
          </div>
          <div className="side-block">
            <h3>{t('about_languages')}</h3>
            <ul className="lang-list">
              {profile.languages.map((item) => (
                <li key={item.name}>
                  {langName(item.name)}
                  <span>{langLevel(item.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}
