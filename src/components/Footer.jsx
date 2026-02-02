export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Final CTA section */}
      <div className="bg-gradient-to-br from-purple-brand to-pink-brand py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Stop analyzing his texts alone at 2am.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Let AI do it. Get your answer in 30 seconds.
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-white text-purple-brand font-bold text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Try It Free →
          </a>
        </div>
      </div>

      {/* Footer links */}
      <div className="bg-dark py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-brand to-pink-brand rounded-lg flex items-center justify-center text-sm font-black">
              S
            </div>
            <span className="font-bold text-lg">Situationship</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/30">
            © 2026 Situationship App
          </p>
        </div>
      </div>
    </footer>
  )
}
