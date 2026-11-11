import { useEffect, useMemo, useRef, useState } from 'react'
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from './i18n/LanguageContext'
import { useScrollSpy } from './hooks/useScrollSpy'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import SectionNav from './components/SectionNav'
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import PortfolioSection from './components/PortfolioSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import AwardsSection from './components/AwardsSection'
import AboutSection from './components/AboutSection'
import PublicationsSection from './components/PublicationsSection'

const INDUSTRY_SECTIONS = [
  'ind-experience',
  'ind-portfolio',
  'ind-projects',
  'ind-skills',
  'ind-awards',
]

const RESEARCH_SECTIONS = [
  'res-about',
  'res-publications',
  'res-projects',
  'res-awards',
]

function ModeHome({ mode }) {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [fading, setFading] = useState(false)
  const switching = useRef(false)

  const industryActive = mode === 'industry'
  const researchActive = mode === 'research'

  const industryNav = useMemo(() => [
    { id: 'ind-experience', label: t('nav_experience') },
    { id: 'ind-portfolio', label: t('nav_portfolio') },
    { id: 'ind-projects', label: t('nav_projects') },
    { id: 'ind-skills', label: t('nav_skills') },
    { id: 'ind-awards', label: t('nav_awards') },
  ], [t])

  const researchNav = useMemo(() => [
    { id: 'res-about', label: t('nav_about') },
    { id: 'res-publications', label: t('nav_publications') },
    { id: 'res-projects', label: t('nav_projects') },
    { id: 'res-awards', label: t('nav_awards') },
  ], [t])

  const industryActiveId = useScrollSpy(INDUSTRY_SECTIONS, industryActive)
  const researchActiveId = useScrollSpy(RESEARCH_SECTIONS, researchActive)

  const setMode = (next) => {
    if (switching.current || next === mode) return
    switching.current = true
    setFading(true)
    window.setTimeout(() => {
      navigate(next === 'industry' ? '/industria' : '/pesquisa')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.setTimeout(() => {
        setFading(false)
        switching.current = false
      }, 40)
    }, 180)
  }

  useEffect(() => {
    document.documentElement.dataset.mode = mode
    document.title = mode === 'industry'
      ? 'Industry · Pamella Soares, PhD'
      : 'Research · Pamella Soares, PhD'
  }, [mode])

  return (
    <>
      <SiteHeader mode={mode} onModeChange={setMode} />

      <main id="top">
        <div
          className={`mode-panel${fading && industryActive ? ' is-fading' : ''}`}
          hidden={!industryActive}
          data-mode="industry"
        >
          <Hero mode="industry" />
          <SectionNav
            label="Industry sections"
            items={industryNav}
            activeId={industryActiveId}
          />
          <ExperienceSection id="ind-experience" />
          <PortfolioSection id="ind-portfolio" />
          <ProjectsSection
            id="ind-projects"
            track="industry"
            kicker={t('kicker_selected')}
          />
          <SkillsSection id="ind-skills" />
          <AwardsSection id="ind-awards" />
        </div>

        <div
          className={`mode-panel${fading && researchActive ? ' is-fading' : ''}`}
          hidden={!researchActive}
          data-mode="research"
        >
          <Hero mode="research" />
          <SectionNav
            label="Research sections"
            items={researchNav}
            activeId={researchActiveId}
          />
          <AboutSection id="res-about" />
          <PublicationsSection id="res-publications" />
          <ProjectsSection
            id="res-projects"
            track="research"
            kicker={t('kicker_research')}
          />
          <AwardsSection
            id="res-awards"
            showBridge
            onBridge={() => setMode('industry')}
          />
        </div>
      </main>

      <SiteFooter />
    </>
  )
}

function App() {
  const location = useLocation()

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/industria" replace />} />
      <Route path="/industria/*" element={<ModeHome mode="industry" />} />
      {/* Legacy About URL → land on Industry */}
      <Route path="/pesquisa/sobre" element={<Navigate to="/industria" replace />} />
      <Route path="/pesquisa/*" element={<ModeHome mode="research" />} />
      <Route
        path="*"
        element={
          <Navigate
            to={location.pathname.startsWith('/pesquisa') ? '/pesquisa' : '/industria'}
            replace
          />
        }
      />
    </Routes>
  )
}

export default App
