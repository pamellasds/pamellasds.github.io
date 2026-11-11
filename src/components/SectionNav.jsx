import { useEffect, useRef, useState } from 'react'
import { scrollToId } from '../hooks/useScrollSpy'

/**
 * Sticky section nav: sits visually inside the hero band (shared background),
 * then stays fixed under the site header after you scroll past.
 * Must be a sibling of .hero-band under .mode-panel (not nested in the short hero).
 */
export default function SectionNav({ label, items, activeId }) {
  const navRef = useRef(null)
  const sentinelRef = useRef(null)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !('IntersectionObserver' in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setStuck(!entry.isIntersecting)
      },
      {
        // Stick once the sentinel (top of nav's natural place) goes under the site header
        root: null,
        rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim() || '64px'} 0px 0px 0px`,
        threshold: 0,
      }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinelRef} className="section-nav-sentinel" aria-hidden="true" />
      <nav
        ref={navRef}
        className={`section-sticky-nav${stuck ? ' is-stuck' : ''}`}
        aria-label={label}
      >
        <div className="wrap">
          {items.map(({ id, label: text }) => (
            <button
              key={id}
              type="button"
              className={`nav-link${activeId === id ? ' is-active' : ''}`}
              onClick={() => scrollToId(id)}
            >
              {text}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
