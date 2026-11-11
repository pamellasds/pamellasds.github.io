import { useLanguage } from '../i18n/LanguageContext'
import { awards, funding } from '../data/awards'
import { loc } from '../data/profile'

export default function AwardsSection({ id, showBridge = false, onBridge }) {
  const { t, lang } = useLanguage()

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('awards_title')}</h2>
        <span className="section-kicker">{t('kicker_recognition')}</span>
      </div>
      <div className="awards-grid">
        <div className="award-col">
          <h3>{t('awards_funding')}</h3>
          {funding.map((item) => (
            <div className="fund-item" key={loc(item.title, lang)}>
              <div className="fund-period">{item.period}</div>
              <strong>{loc(item.title, lang)}</strong>
              <p>{loc(item.detail, lang)}</p>
            </div>
          ))}
        </div>
        <div className="award-col">
          <h3>{t('awards_honours')}</h3>
          {awards.map((item) => (
            <div className="award-item" key={loc(item.title, lang)}>
              <strong>{loc(item.title, lang)}</strong>
              <p>{loc(item.detail, lang)}</p>
            </div>
          ))}
        </div>
      </div>

      {showBridge && (
        <div className="bridge">
          <p>{t('bridge_text')}</p>
          <button type="button" onClick={onBridge}>{t('bridge_cta')}</button>
        </div>
      )}
    </section>
  )
}
