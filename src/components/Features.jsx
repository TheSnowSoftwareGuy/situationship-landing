const features = [
  {
    icon: '📊',
    title: 'Interest Score',
    description: 'A-F grade backed by AI analysis of texting behavior and engagement patterns',
  },
  {
    icon: '🔍',
    title: 'Pattern Detection',
    description: 'Response times, initiation ratio, late-night texting frequency, and more',
  },
  {
    icon: '💡',
    title: '3 Key Insights',
    description: 'Specific observations about your conversation that you might have missed',
  },
  {
    icon: '🎯',
    title: 'Actionable Advice',
    description: 'Clear next steps based on the data — not guessing, not overthinking',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    description: 'Your texts are analyzed and immediately deleted — never stored, never shared',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-brand/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            What you get
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            More than just a letter grade — real insights you can act on
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`bg-dark border border-white/5 rounded-2xl p-7 hover:border-purple-brand/30 transition-all duration-300 hover:-translate-y-1 ${
                i === features.length - 1 && features.length % 3 !== 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-brand to-pink-brand text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-purple-brand/30 hover:shadow-pink-brand/40 transition-all duration-300 hover:scale-105"
          >
            Try It Free →
          </a>
        </div>
      </div>
    </section>
  )
}
