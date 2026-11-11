import { useLanguage } from '../i18n/LanguageContext'
import { portfolioItems } from '../data/portfolio'
import { loc } from '../data/profile'
import PhIcon from './PhIcon'

export default function PortfolioSection({ id }) {
  const { t, lang } = useLanguage()

  return (
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('portfolio_title')}</h2>
        <span className="section-kicker">{t('kicker_industry')}</span>
      </div>

      {portfolioItems.map((item) => (
        <article className="portfolio-block" key={item.id}>
          <div className="portfolio-top">
            <h3>{loc(item.name, lang)}</h3>
            <span className="portfolio-label">{loc(item.label, lang)}</span>
          </div>
          <p className="portfolio-desc">{loc(item.description, lang)}</p>
          <div className="tags" style={{ marginBottom: '0.85rem' }}>
            {item.technologies.map((tech) => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
          {item.features?.length > 0 && (
            <>
              {item.features.length > 3 && (
                <p className="scroll-hint" aria-hidden="true">{t('portfolio_scroll')}</p>
              )}
              <div className="feature-row-wrap">
                <div
                  className="feature-row"
                  tabIndex={0}
                  aria-label={t('portfolio_features')}
                >
                  {item.features.map((feature) => (
                    <div className="feature-chip" key={loc(feature.title, lang)}>
                      {feature.icon && (
                        <PhIcon name={feature.icon} size={20} className="ico" weight="regular" />
                      )}
                      <strong>{loc(feature.title, lang)}</strong>
                      <p>{loc(feature.text, lang)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </article>
      ))}
    </section>
  )
}
