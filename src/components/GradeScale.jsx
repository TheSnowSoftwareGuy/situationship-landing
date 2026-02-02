const grades = [
  {
    letter: 'A',
    label: "He's into you. The effort is mutual.",
    emoji: '💚',
    color: 'from-green-400 to-emerald-500',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    letter: 'B',
    label: 'Good signs, minor inconsistencies. Worth watching.',
    emoji: '💙',
    color: 'from-blue-400 to-cyan-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    letter: 'C',
    label: 'Mixed signals. Proceed with caution.',
    emoji: '💛',
    color: 'from-yellow-400 to-amber-500',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    letter: 'D',
    label: "Low interest. You're doing most of the work.",
    emoji: '🧡',
    color: 'from-orange-400 to-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    letter: 'F',
    label: 'Not interested. Time to move on, babe.',
    emoji: '❤️',
    color: 'from-red-400 to-rose-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
]

export default function GradeScale() {
  return (
    <section className="py-24 px-6 bg-dark-card relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-brand/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            The Grade Scale
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            From "he's obsessed" to "block him now" — here's what each grade means
          </p>
        </div>

        <div className="space-y-4">
          {grades.map((grade, i) => (
            <div
              key={i}
              className={`${grade.bg} ${grade.border} border rounded-2xl p-5 sm:p-6 flex items-center gap-5 hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-br ${grade.color} bg-clip-text text-transparent min-w-[3rem] text-center`}>
                {grade.letter}
              </div>
              <div className="flex-1">
                <p className="text-white/90 font-medium text-base sm:text-lg">
                  {grade.label}
                </p>
              </div>
              <div className="text-2xl">{grade.emoji}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
