import { useRef, useState } from 'react'

const gradeColors = {
  A: { bg: 'from-green-500 to-emerald-600', text: '#10B981' },
  B: { bg: 'from-blue-500 to-cyan-600', text: '#3B82F6' },
  C: { bg: 'from-yellow-500 to-amber-600', text: '#F59E0B' },
  D: { bg: 'from-orange-500 to-orange-600', text: '#F97316' },
  F: { bg: 'from-red-500 to-rose-600', text: '#EF4444' },
}

export default function ShareCard({ grade, result, score, onBack }) {
  const cardRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const colors = gradeColors[grade]

  async function handleDownload() {
    setDownloading(true)
    try {
      const { default: html2canvas } = await import('html2canvas-pro')
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      })
      const link = document.createElement('a')
      link.download = `situationship-grade-${grade}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Failed to generate image:', err)
    }
    setDownloading(false)
  }

  async function handleCopyLink() {
    const url = window.location.href.split('#')[0] + '#quiz'
    await navigator.clipboard.writeText(`He scored a ${grade} on the Situationship App quiz 💀 Find out yours → ${url}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleShareNative() {
    if (navigator.share) {
      navigator.share({
        title: `He scored a ${grade}!`,
        text: `He scored a ${grade} on the Situationship App quiz 💀 Find out yours →`,
        url: window.location.href.split('#')[0] + '#quiz',
      }).catch(() => {})
    }
  }

  return (
    <div className="grade-reveal">
      {/* Shareable Card */}
      <div
        ref={cardRef}
        className="mx-auto max-w-sm rounded-3xl overflow-hidden shadow-2xl mb-8"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
      >
        <div className="p-8 text-center">
          {/* Logo */}
          <div className="text-sm font-bold tracking-widest uppercase text-white/60 mb-6">
            Situationship App
          </div>

          {/* Grade */}
          <div className="mb-4">
            <div
              className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-lg"
            >
              <span className="text-7xl font-black text-white drop-shadow-lg">
                {grade}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-white mb-2">
            He scored a {grade}
          </h3>
          <p className="text-white/70 text-sm mb-6">
            {result.title}
          </p>

          {/* Score bar */}
          <div className="bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
            <div
              className="h-full bg-white/40 rounded-full transition-all"
              style={{ width: `${(score / 20) * 100}%` }}
            />
          </div>

          {/* CTA */}
          <div className="text-white/50 text-xs font-medium">
            Find out yours → situationship.app
          </div>
        </div>
      </div>

      {/* Share buttons */}
      <div className="space-y-3 max-w-sm mx-auto">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-brand to-pink-brand text-white font-bold px-6 py-4 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
        >
          {downloading ? 'Generating...' : 'Save Image 📸'}
        </button>

        {typeof navigator !== 'undefined' && navigator.share && (
          <button
            onClick={handleShareNative}
            className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/20 transition-all"
          >
            Share 📤
          </button>
        )}

        <button
          onClick={handleCopyLink}
          className="w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-4 rounded-full hover:bg-white/20 transition-all"
        >
          {copied ? 'Copied! ✅' : 'Copy Link 🔗'}
        </button>

        <button
          onClick={onBack}
          className="w-full text-center text-white/50 font-medium py-3 hover:text-white/80 transition-colors"
        >
          ← Back to Results
        </button>
      </div>
    </div>
  )
}
