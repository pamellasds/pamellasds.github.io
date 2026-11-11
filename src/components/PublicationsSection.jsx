import { useEffect, useMemo, useState } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { publications } from '../data/publications'
import { profile } from '../data/profile'

const PAGE_SIZE = 5

function isFirstAuthor(authors) {
  const first = (authors || '').split(';')[0].trim().toLowerCase()
  return first.startsWith('soares')
}

function flattenGroups(groups) {
  return groups.flatMap(({ year, papers }) =>
    papers.map((paper) => ({ year, paper })),
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

export default function PublicationsSection({ id }) {
  const { t } = useLanguage()
  const years = publications.map((p) => p.year).filter((year) => year !== 'Preprint')
  const [filter, setFilter] = useState('selected')
  const [page, setPage] = useState(1)

  const flatPapers = useMemo(() => {
    if (filter === 'selected') {
      return flattenGroups(
        publications
          .map(({ year, papers }) => ({
            year,
            papers: papers.filter((p) => isFirstAuthor(p.authors)),
          }))
          .filter((group) => group.papers.length > 0 && group.year !== 'Preprint'),
      )
    }
    return flattenGroups(publications.filter((p) => p.year === filter))
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
    <section className="section wrap" id={id}>
      <div className="section-head">
        <h2>{t('pub_title')}</h2>
      </div>

      <div className="pub-filters" role="tablist" aria-label="Publication filters">
        <button
          type="button"
          className={`pub-chip pub-chip-primary${filter === 'selected' ? ' is-active' : ''}`}
          onClick={() => setFilter('selected')}
        >
          {t('pub_selected')}
        </button>
        {years.map((year) => (
          <button
            key={year}
            type="button"
            className={`pub-chip${filter === year ? ' is-active' : ''}`}
            onClick={() => setFilter(year)}
          >
            {year}
          </button>
        ))}
      </div>
      <p className="pub-filter-note">{t('pub_selected_note')}</p>

      <div>
        {pageGroups.map(({ year, papers }) => (
          <div className="year-group" key={`${year}-${papers[0]?.title}`}>
            <div className="year-label">{year}</div>
            {papers.map((paper) => (
              <article className="paper" key={paper.title}>
                <h3 className="paper-title">
                  {paper.title}
                  {paper.award && <span className="paper-award">{paper.award}</span>}
                </h3>
                <p className="paper-authors">{paper.authors}</p>
                <p className="paper-venue">{paper.venue}</p>
                <div className="paper-links">
                  {paper.preprint && paper.preprint !== '#' && (
                    <a
                      className="pill-link"
                      href={paper.preprint}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('pub_preprint')}
                    </a>
                  )}
                  {paper.publisherUrl && paper.publisherUrl !== '#' && (
                    <a
                      className="pill-link"
                      href={paper.publisherUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('pub_publisher')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pub-pagination" role="navigation" aria-label={t('pub_pagination')}>
          <button
            type="button"
            className="pub-page-btn"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
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
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
          >
            {t('pub_next')}
            <CaretRight size={14} weight="bold" />
          </button>
        </div>
      )}

      <div className="scholar-cta">
        <p>{t('pub_scholar_blurb')}</p>
        <a
          className="btn btn-primary"
          href={profile.social.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('pub_scholar_open')}
        </a>
      </div>
    </section>
  )
}
