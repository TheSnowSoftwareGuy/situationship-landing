const testimonials = [
  {
    quote: "I knew he was breadcrumbing me but seeing it as a D+ was the wake-up call I needed 💀",
    name: '@maya',
    age: 24,
    grade: 'D+',
    color: 'from-orange-400 to-orange-500',
  },
  {
    quote: "Showed my therapist my grade and she said 'well, the AI isn't wrong'",
    name: '@jess',
    age: 27,
    grade: 'C',
    color: 'from-yellow-400 to-amber-500',
  },
  {
    quote: "He got an A and now we're official 🥹",
    name: '@sofia',
    age: 22,
    grade: 'A',
    color: 'from-green-400 to-emerald-500',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-brand/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            What people are saying
          </h2>
          <p className="text-white/60 text-lg">
            Real reactions from real users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-dark-card border border-white/5 rounded-2xl p-7 hover:border-white/10 transition-all duration-300"
            >
              {/* Grade badge */}
              <div className="mb-4">
                <span className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${t.color} rounded-full px-3 py-1 text-sm font-bold text-white`}>
                  Grade: {t.grade}
                </span>
              </div>

              {/* Quote */}
              <p className="text-white/90 text-base leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-brand to-pink-brand flex items-center justify-center text-sm font-bold">
                  {t.name[1].toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">Age {t.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
