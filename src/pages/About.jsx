import { useLanguage } from '../i18n/LanguageContext'
import { profile, loc } from '../data/profile'
import './About.css'

export default function About() {
  const { t, lang } = useLanguage()

  return (
    <div className="about">
      <section className="about-section">
        <h1 className="section-title">{t('about_title')}</h1>
        <p className="about-summary">{loc(profile.summary, lang)}</p>
      </section>

      <section className="about-section">
        <h2 className="about-heading">{t('about_education')}</h2>
        <div className="education-list">
          {profile.education.map((edu, i) => (
            <div key={i} className="education-item">
              <div className="education-dot" />
              <div className="education-content">
                <h3 className="education-degree">{loc(edu.degree, lang)}</h3>
                <p className="education-institution">{loc(edu.institution, lang)}</p>
                <p className="education-period">{edu.period}</p>
                {edu.note && <p className="education-note">{loc(edu.note, lang)}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">{t('about_research_interests')}</h2>
        <div className="interests-grid">
          {profile.researchInterests.map((interest, i) => (
            <div key={i} className="interest-card">
              <span className="interest-icon">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="interest-label">{loc(interest, lang)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-heading">{t('about_languages')}</h2>
        <div className="languages-list">
          <div className="language-item">
            <span className="language-name">{t('lang_portuguese')}</span>
            <span className="language-level">{t('lang_native')}</span>
          </div>
          <div className="language-item">
            <span className="language-name">{t('lang_english')}</span>
            <span className="language-level">{t('lang_b2')}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
