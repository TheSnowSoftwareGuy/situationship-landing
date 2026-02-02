export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-brand via-purple-900 to-pink-brand animate-gradient opacity-90" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-brand/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-brand/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/90">AI-Powered Text Analysis</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
          Is he wasting
          <br />
          <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
            your time?
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload your text screenshots and get an AI-powered analysis of his interest level in <strong className="text-white">30 seconds</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#quiz"
            className="group relative inline-flex items-center gap-2 bg-white text-purple-brand font-bold text-lg px-8 py-4 rounded-full shadow-2xl shadow-purple-brand/30 hover:shadow-pink-brand/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Take the Free Quiz
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Analyze Your Texts →
          </a>
        </div>

        {/* Social proof mini */}
        <div className="mt-12 flex items-center justify-center gap-3 text-white/60 text-sm">
          <div className="flex -space-x-2">
            {['💜', '💗', '💛', '💚'].map((emoji, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border-2 border-dark flex items-center justify-center text-sm">
                {emoji}
              </div>
            ))}
          </div>
          <span>10,000+ texts analyzed this week</span>
        </div>

        {/* Phone mockup */}
        <div className="mt-16 mx-auto max-w-xs animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="bg-dark-card rounded-3xl border border-white/10 p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-brand to-pink-brand rounded-full flex items-center justify-center text-xs font-bold">J</div>
              <span className="text-sm font-medium text-white/80">Jake</span>
              <span className="ml-auto text-xs text-white/40">Today</span>
            </div>
            <div className="space-y-2">
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-white/80 max-w-[80%]">hey wyd</div>
              <div className="bg-purple-brand/40 rounded-2xl rounded-tr-sm px-3 py-2 text-sm text-white/90 max-w-[80%] ml-auto">Not much! How was your day?</div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-white/80 max-w-[80%]">good</div>
              <div className="bg-purple-brand/40 rounded-2xl rounded-tr-sm px-3 py-2 text-sm text-white/90 max-w-[85%] ml-auto">I got promoted today!! 🎉</div>
              <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 text-sm text-white/60 max-w-[40%] italic">Seen 2h ago</div>
            </div>
            <div className="mt-4 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-1.5">
                <span className="text-2xl font-black">D+</span>
                <span className="text-xs font-medium opacity-80">Low Interest</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
