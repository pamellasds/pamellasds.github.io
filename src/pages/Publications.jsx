import { useEffect, useMemo, useState } from 'react'
import { GraduationCap, FileText, ArrowSquareOut, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { publications } from '../data/publications'
import './Publications.css'

const PAGE_SIZE = 5

function isFirstAuthor(authors) {
  const first = (authors || '').split(';')[0].trim().toLowerCase()
  return first.startsWith('soares')
}

function flattenGroups(groups) {
  return groups.flatMap(({ year, papers }) =>
    papers.map(paper => ({ year, paper }))
  )
}

function groupPageItems(items) {
  const groups = []
  for (const item of items) {
    const last = groups[groups.length - 1]
    if (last && last.year === item.year) {
      last.papers.push(item.paper)
    } else {
      groups.push({ year: item.year, papers: [item.paper] })
    }
  }
  return groups
}

export default function Publications() {
  const { t } = useLanguage()
  const years = publications.map(p => p.year).filter(year => year !== 'Preprint')
  const [filter, setFilter] = useState('selected')
  const [page, setPage] = useState(1)

  const flatPapers = useMemo(() => {
    if (filter === 'selected') {
      return flattenGroups(
        publications
          .map(({ year, papers }) => ({
            year,
            papers: papers.filter(p => isFirstAuthor(p.authors)),
          }))
          .filter(group => group.papers.length > 0 && group.year !== 'Preprint')
      )
    }

    return flattenGroups(publications.filter(p => p.year === filter))
  }, [filter])

  const totalPages = Math.max(1, Math.ceil(flatPapers.length / PAGE_SIZE))

  useEffect(() => {
    setPage(1)
  }, [filter])

  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [page, totalPages])

  const pageGroups = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return groupPageItems(flatPapers.slice(start, start + PAGE_SIZE))
  }, [flatPapers, page])

  return (
    <div className="publications">
      <h1 className="section-title">{t('pub_title')}</h1>
      <p className="section-subtitle">{t('pub_subtitle')}</p>

      <div className="pub-filters-row">
        <div className="pub-filters">
          <button
            className={`pub-filter-btn pub-filter-btn--primary ${filter === 'selected' ? 'active' : ''}`}
            onClick={() => setFilter('selected')}
          >
            {t('pub_selected')}
          </button>
          {years.map(year => (
            <button
              key={year}
              className={`pub-filter-btn ${filter === year ? 'active' : ''}`}
              onClick={() => setFilter(year)}
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
          <GraduationCap size={16} weight="duotone" />
          {t('pub_scholar_btn')}
        </a>
      </div>

      <div className="pub-list">
        {(() => {
          let index = (page - 1) * PAGE_SIZE
          return pageGroups.map(({ year, papers }) => (
          <div key={`${year}-${papers[0]?.title}`} className="pub-year-section">
            <div className="pub-year-badge">{year}</div>
            <div className="pub-papers">
              {papers.map(paper => {
                index += 1
                return (
                <article key={paper.title} className="pub-card">
                  <div className="pub-card-left">
                    <span className="pub-card-number">
                      {String(index).padStart(2, '0')}
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
                          <FileText size={14} weight="duotone" />
                          {t('pub_preprint')}
                        </a>
                      )}
                      {paper.publisherUrl && paper.publisherUrl !== '#' && (
                        <a href={paper.publisherUrl} target="_blank" rel="noopener noreferrer" className="pub-action-btn">
                          <ArrowSquareOut size={14} weight="duotone" />
                          {t('pub_publisher')}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
                )
              })}
            </div>
          </div>
          ))
        })()}
      </div>

      {totalPages > 1 && (
        <div className="pub-pagination" role="navigation" aria-label={t('pub_pagination')}>
          <button
            type="button"
            className="pub-page-btn"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            <CaretLeft size={14} weight="bold" />
            {t('pub_prev')}
          </button>
          <span className="pub-page-status">
            {t('pub_page_of').replace('{page}', String(page)).replace('{total}', String(totalPages))}
          </span>
          <button
            type="button"
            className="pub-page-btn"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
          >
            {t('pub_next')}
            <CaretRight size={14} weight="bold" />
          </button>
        </div>
      )}
    </div>
  )
}
