import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { publications } from '../data/publications'
import './Publications.css'

export default function Publications() {
  const { t } = useLanguage()
  const years = publications.map(p => p.year)
  const [selectedYear, setSelectedYear] = useState(null) // null = all

  const filteredPublications = selectedYear
    ? publications.filter(p => p.year === selectedYear)
    : publications

  return (
    <div className="publications">
      <h1 className="section-title">{t('pub_title')}</h1>
      <p className="section-subtitle">{t('pub_subtitle')}</p>

      {/* Year filter tabs (horizontal) */}
      <div className="pub-filters-row">
        <div className="pub-filters">
          <button
            className={`pub-filter-btn ${selectedYear === null ? 'active' : ''}`}
            onClick={() => setSelectedYear(null)}
          >
            All
          </button>
          {years.map(year => (
              <button
                key={year}
                className={`pub-filter-btn ${selectedYear === year ? 'active' : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
          ))}
        </div>
        <a
          href="https://scholar.google.com/citations?user=ZWmLWIAAAAAJ&hl=pt-BR&authuser=1"
          target="_blank"
          rel="noopener noreferrer"
          className="pub-scholar-btn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          {t('pub_scholar_btn')}
        </a>
      </div>

      {/* Publications list */}
      <div className="pub-list">
        {filteredPublications.map(({ year, papers }) => (
          <div key={year} className="pub-year-section">
            <div className="pub-year-badge">{year}</div>
            <div className="pub-papers">
              {papers.map((paper, i) => (
                <article key={i} className="pub-card">
                  <div className="pub-card-left">
                    <span className="pub-card-number">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="pub-card-content">
                    <h3 className="pub-card-title">
                      {paper.title}
                      {paper.award && (
                        <span className="pub-card-award">{paper.award}</span>
                      )}
                    </h3>
                    <p className="pub-card-authors">{paper.authors}</p>
                    <p className="pub-card-venue">{paper.venue}</p>
                    <div className="pub-card-actions">
                      {paper.preprint && paper.preprint !== '#' && (
                        <a href={paper.preprint} target="_blank" rel="noopener noreferrer" className="pub-action-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                          </svg>
                          {t('pub_preprint')}
                        </a>
                      )}
                      {paper.publisherUrl && paper.publisherUrl !== '#' && (
                        <a href={paper.publisherUrl} target="_blank" rel="noopener noreferrer" className="pub-action-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                          {t('pub_publisher')}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
