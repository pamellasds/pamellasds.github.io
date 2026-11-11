import { useEffect, useRef, useState } from 'react'
import { CaretDown, List } from '@phosphor-icons/react'
import { useLanguage } from '../i18n/LanguageContext'
import { assetUrl } from '../utils'

export default function SiteHeader({ mode, onModeChange }) {
  const { t, lang, setLang } = useLanguage()
  const [cvOpen, setCvOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const cvRef = useRef(null)

  const industryCv = assetUrl('cv/CV-Pamella-Blockchain.pdf')
  const academyCv = assetUrl('cv/CV-Pamella-Academy.pdf')
  const defaultCv = mode === 'research' ? academyCv : industryCv

  useEffect(() => {
    const onDocClick = (e) => {
      if (cvRef.current && !cvRef.current.contains(e.target)) setCvOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setCvOpen(false)
  }, [mode, lang])

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <div className="mode-toggle" role="group" aria-label="Site mode">
            <button
              type="button"
              aria-pressed={mode === 'industry'}
              onClick={() => onModeChange('industry')}
            >
              {t('header_industry')}
            </button>
            <button
              type="button"
              aria-pressed={mode === 'research'}
              onClick={() => onModeChange('research')}
            >
              {t('header_research')}
            </button>
          </div>

          <div className="header-spacer" />

          <div className="lang-switch" aria-label="Language">
            <button
              type="button"
              aria-current={lang === 'en' ? 'true' : undefined}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              aria-current={lang === 'pt' ? 'true' : undefined}
              onClick={() => setLang('pt')}
            >
              PT
            </button>
          </div>

          <div className={`cv-split${cvOpen ? ' open' : ''}`} ref={cvRef} id="cvSplit">
            <a className="cv-main" href={defaultCv} target="_blank" rel="noopener noreferrer">
              {t('sidebar_download_cv')}
            </a>
            <button
              className="cv-caret"
              type="button"
              aria-expanded={cvOpen}
              aria-haspopup="true"
              aria-label={t('cv_options')}
              onClick={(e) => {
                e.stopPropagation()
                setCvOpen((v) => !v)
              }}
            >
              <CaretDown size={12} weight="bold" />
            </button>
            <div className="cv-menu" role="menu">
              <a role="menuitem" href={industryCv} target="_blank" rel="noopener noreferrer">
                {t('sidebar_download_cv_industry')}
              </a>
              <a role="menuitem" href={academyCv} target="_blank" rel="noopener noreferrer">
                {t('sidebar_download_cv_academy')}
              </a>
            </div>
          </div>

          <button
            className="menu-btn"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobileDrawer"
            aria-label={menuOpen ? t('menu_close') : t('menu_open')}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <List size={18} weight="bold" />
          </button>
        </div>
      </header>

      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`} id="mobileDrawer">
        <div className="cv-links">
          <a href={industryCv} target="_blank" rel="noopener noreferrer">
            {t('sidebar_download_cv_industry')}
          </a>
          <a href={academyCv} target="_blank" rel="noopener noreferrer">
            {t('sidebar_download_cv_academy')}
          </a>
        </div>
        <div className="lang-row">
          <button
            type="button"
            aria-current={lang === 'en' ? 'true' : undefined}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            aria-current={lang === 'pt' ? 'true' : undefined}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
        </div>
      </div>
    </>
  )
}
