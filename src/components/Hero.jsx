import { useLanguage } from '../i18n/LanguageContext'
import { profile, loc } from '../data/profile'
import { assetUrl } from '../utils'

export default function Hero({ mode }) {
  const { t, lang } = useLanguage()
  const summary = mode === 'industry'
    ? loc(profile.heroIndustry, lang)
    : loc(profile.heroResearch, lang)

  return (
    <div className="hero-band">
      <div className="hero-grain" aria-hidden="true" />
      <section className="hero">
        <div className="wrap">
          <div className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            {mode === 'industry' ? t('header_industry') : t('header_research')}
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>{profile.name}</h1>
              <p className="hero-title">{t('profile_title')}</p>
              <p className="hero-meta">{t('profile_location')}</p>
            </div>
            <figure className="portrait-frame">
              <img
                src={assetUrl(profile.photo)}
                alt={t('hero_photo_alt')}
                width="400"
                height="500"
              />
            </figure>
            <p className="hero-summary">{summary}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
