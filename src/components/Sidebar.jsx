import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { assetUrl } from '../utils'
import { profile } from '../data/profile'
import SocialLinks from './SocialLinks'
import './Sidebar.css'

export default function Sidebar({ open, onClose }) {
  const location = useLocation()
  const { t } = useLanguage()
  const mode = location.pathname.startsWith('/industria') ? 'industria' : 'pesquisa'

  const researchLinks = [
    { to: '/pesquisa/sobre', label: t('nav_about') },
    { to: '/pesquisa/publicacoes', label: t('nav_publications') },
    { to: '/pesquisa/projetos', label: t('nav_projects') },
    { to: '/pesquisa/awards', label: t('nav_awards') },
  ]

  const industryLinks = [
    { to: '/industria/experiencias', label: t('nav_experience') },
    { to: '/industria/portfolio', label: t('nav_portfolio') },
    { to: '/industria/skills', label: t('nav_skills') },
    { to: '/industria/awards', label: t('nav_awards') },
  ]

  const links = mode === 'pesquisa' ? researchLinks : industryLinks
  const cvHref = mode === 'industria'
    ? assetUrl('/cv/CV-Pamella-Blockchain.pdf')
    : assetUrl('/cv/CV-Pamella-Academy.pdf')
  const cvLabel = mode === 'industria'
    ? t('sidebar_download_cv_industry')
    : t('sidebar_download_cv_academy')

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar sidebar--brand ${open ? 'open' : ''}`}>
        <div className="sidebar-profile">
          <div className="sidebar-photo-wrap">
            <img
              src={assetUrl('/pamella.jpeg')}
              alt={profile.name}
              className="sidebar-photo"
            />
          </div>
          <h2 className="sidebar-name">{profile.name}</h2>
          <p className="sidebar-title">{t('profile_title')}</p>
          <p className="sidebar-location">{t('profile_location')}</p>
        </div>

        <nav className="sidebar-nav">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm sidebar-cv-btn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            {cvLabel}
          </a>
          <SocialLinks />
        </div>
      </aside>
    </>
  )
}
