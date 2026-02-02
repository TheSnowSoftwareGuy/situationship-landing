const steps = [
  {
    icon: '📱',
    title: 'Screenshot your texts',
    description: 'Take screenshots of your iMessage or text conversation',
    step: '01',
  },
  {
    icon: '🤖',
    title: 'AI analyzes the conversation',
    description: 'Our AI reads his texting patterns, response times, and engagement',
    step: '02',
  },
  {
    icon: '💯',
    title: 'Get your grade',
    description: 'A-F interest score with insights and actionable advice',
    step: '03',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-brand/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            How it works
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Three simple steps to decode his texts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-purple-brand/40 to-transparent" />
              )}

              <div className="bg-dark-card border border-white/5 rounded-2xl p-8 hover:border-purple-brand/30 transition-all duration-300 hover:-translate-y-1">
                {/* Step number */}
                <div className="text-5xl font-black text-white/5 absolute top-4 right-6">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-5">{step.icon}</div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
