import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'

export default function SiteFooter() {
  const { t } = useLanguage()
  const { social } = profile

  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-brand">{profile.name}</p>
          <p className="footer-note">{t('footer_note')}</p>
        </div>
        <nav className="social-row" aria-label="Social links">
          <a href={`mailto:${social.email}`}>Email</a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={social.googleScholar} target="_blank" rel="noopener noreferrer">Scholar</a>
          <a href={social.orcid} target="_blank" rel="noopener noreferrer">ORCID</a>
          <a href={social.lattes} target="_blank" rel="noopener noreferrer">Lattes</a>
        </nav>
      </div>
    </footer>
  )
}
