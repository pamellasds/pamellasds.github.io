import { Medal, CurrencyCircleDollar } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { funding, awards } from '../data/awards'
import { loc } from '../data/profile'
import './Awards.css'

export default function Awards() {
  const { t, lang } = useLanguage()

  return (
    <div className="awards-page">
      <h1 className="section-title">{t('awards_title')}</h1>
      <p className="section-subtitle">{t('awards_subtitle')}</p>

      <section className="awards-section">
        <h2 className="awards-heading">
          <CurrencyCircleDollar size={22} weight="duotone" />
          {t('awards_funding')}
        </h2>
        <ul className="awards-list">
          {funding.map((item, i) => (
            <li key={i} className="awards-item">
              <div className="awards-item-top">
                <h3 className="awards-item-title">{loc(item.title, lang)}</h3>
                <span className="awards-item-period">{item.period}</span>
              </div>
              <p className="awards-item-detail">{loc(item.detail, lang)}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="awards-section">
        <h2 className="awards-heading">
          <Medal size={22} weight="duotone" />
          {t('awards_honours')}
        </h2>
        <ul className="awards-list">
          {awards.map((item, i) => (
            <li key={i} className="awards-item">
              <h3 className="awards-item-title">{loc(item.title, lang)}</h3>
              <p className="awards-item-detail">{loc(item.detail, lang)}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
