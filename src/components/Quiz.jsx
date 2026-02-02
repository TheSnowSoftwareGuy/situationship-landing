import { useState, useRef } from 'react'
import ShareCard from './ShareCard'

const questions = [
  {
    question: 'How often does he text you first?',
    options: [
      { text: 'Almost every day', points: 4 },
      { text: 'A few times a week', points: 3 },
      { text: 'Only when I text first', points: 1 },
      { text: "What's texting first?", points: 0 },
    ],
  },
  {
    question: 'How long does he take to reply?',
    options: [
      { text: 'Within minutes', points: 4 },
      { text: 'Within an hour or two', points: 3 },
      { text: 'Several hours', points: 1 },
      { text: "I'm still waiting...", points: 0 },
    ],
  },
  {
    question: 'Does he ask you questions about your life?',
    options: [
      { text: 'Yes, genuinely curious', points: 4 },
      { text: 'Sometimes, surface level', points: 2 },
      { text: 'Only when I bring stuff up', points: 1 },
      { text: "Nope, it's all about him", points: 0 },
    ],
  },
  {
    question: 'When does he usually text you?',
    options: [
      { text: 'Throughout the day', points: 4 },
      { text: 'Evenings and weekends', points: 3 },
      { text: 'Only late at night', points: 1 },
      { text: 'Randomly with no pattern', points: 2 },
    ],
  },
  {
    question: 'How does he respond when you share good news?',
    options: [
      { text: 'Enthusiastic and engaged', points: 4 },
      { text: '"That\'s cool" energy', points: 2 },
      { text: 'Changes the subject', points: 1 },
      { text: 'Leaves me on read', points: 0 },
    ],
  },
]

const gradeResults = [
  {
    min: 16,
    max: 20,
    grade: 'A',
    title: "Girl, he's into you! 💚",
    description: "The signs are all there — he's making effort, showing interest, and matching your energy. This one's worth keeping around.",
    color: 'from-green-400 to-emerald-500',
    textColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    min: 11,
    max: 15,
    grade: 'B',
    title: 'Looking good, but keep your eyes open 💙',
    description: "He's showing interest but there's room for improvement. Watch for consistency — does he keep this energy or does it fade?",
    color: 'from-blue-400 to-cyan-500',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    min: 6,
    max: 10,
    grade: 'C',
    title: 'Mixed signals alert 🚨',
    description: "One day he's all in, the next day he's MIA. You deserve someone whose interest doesn't require a detective to decode.",
    color: 'from-yellow-400 to-amber-500',
    textColor: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    min: 1,
    max: 5,
    grade: 'D',
    title: 'Houston, we have a problem 🧡',
    description: "You're putting in 90% of the effort and getting crumbs back. It might be time to pull back and see if he even notices.",
    color: 'from-orange-400 to-orange-500',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    min: 0,
    max: 0,
    grade: 'F',
    title: 'Block him, queen 👑',
    description: "Babe, the evidence is clear. He's not interested, and you deserve someone who doesn't make you question everything. Delete his number.",
    color: 'from-red-400 to-rose-500',
    textColor: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
]

function getResult(score) {
  return gradeResults.find(r => score >= r.min && score <= r.max) || gradeResults[gradeResults.length - 1]
}

export default function Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState([])
  const [transitioning, setTransitioning] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const quizRef = useRef(null)

  const totalScore = answers.reduce((sum, a) => sum + a, 0)
  const result = getResult(totalScore)

  function handleStart() {
    setStarted(true)
    setCurrentQ(0)
    setAnswers([])
    setShowResult(false)
    setShowShare(false)
  }

  function handleAnswer(points) {
    setTransitioning(true)
    const newAnswers = [...answers, points]
    setAnswers(newAnswers)

    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ(currentQ + 1)
      } else {
        setShowResult(true)
      }
      setTransitioning(false)
    }, 350)
  }

  function handleReset() {
    setStarted(false)
    setCurrentQ(0)
    setAnswers([])
    setShowResult(false)
    setShowShare(false)
  }

  const progress = ((currentQ + (showResult ? 1 : 0)) / questions.length) * 100

  return (
    <section id="quiz" className="py-24 px-6 bg-dark relative overflow-hidden" ref={quizRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-brand/10 rounded-full blur-3xl" />

      <div className="max-w-2xl mx-auto relative">
        {!started ? (
          /* Quiz Intro */
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-brand to-pink-brand rounded-2xl mb-8 text-4xl">
              💬
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Is He Into You?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto">
              Take our free 5-question quiz and get your grade in under a minute. No signup required.
            </p>
            <button
              onClick={handleStart}
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-brand to-pink-brand text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl shadow-purple-brand/30 hover:shadow-pink-brand/40 transition-all duration-300 hover:scale-105 active:scale-95 pulse-glow"
            >
              Start the Quiz
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ) : showResult ? (
          /* Results */
          <div className="text-center">
            {!showShare ? (
              <div className="grade-reveal">
                {/* Grade circle */}
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${result.color} mb-8 shadow-2xl`}>
                  <span className="text-6xl font-black text-white">{result.grade}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
                  {result.title}
                </h2>
                <p className="text-white/70 text-lg max-w-lg mx-auto mb-4 leading-relaxed">
                  {result.description}
                </p>
                <p className="text-white/40 text-sm mb-8">
                  Score: {totalScore}/20
                </p>

                {/* CTA section */}
                <div className={`${result.bgColor} border border-white/10 rounded-2xl p-6 mb-8`}>
                  <p className="text-white/90 font-semibold mb-2">
                    Want the REAL analysis?
                  </p>
                  <p className="text-white/60 text-sm mb-4">
                    Upload your text screenshots for a detailed AI breakdown with specific insights about your conversation.
                  </p>
                  <a
                    href="#features"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-brand to-pink-brand text-white font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform"
                  >
                    Analyze My Texts →
                  </a>
                </div>

                {/* Share + Reset */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={() => setShowShare(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all"
                  >
                    Share Your Grade 📤
                  </button>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center gap-2 text-white/50 font-medium px-6 py-3 rounded-full hover:text-white/80 transition-all"
                  >
                    Retake Quiz ↻
                  </button>
                </div>
              </div>
            ) : (
              <ShareCard grade={result.grade} result={result} score={totalScore} onBack={() => setShowShare(false)} />
            )}
          </div>
        ) : (
          /* Questions */
          <div>
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-white/50 mb-2">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-brand to-pink-brand rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className={transitioning ? 'quiz-exit' : 'quiz-enter'}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
                {questions[currentQ].question}
              </h3>

              <div className="space-y-3">
                {questions[currentQ].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.points)}
                    disabled={transitioning}
                    className="w-full text-left bg-dark-card border border-white/10 rounded-xl px-6 py-4 hover:border-purple-brand/50 hover:bg-purple-brand/10 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full border-2 border-white/20 flex items-center justify-center text-sm font-bold text-white/40 group-hover:border-purple-brand group-hover:text-purple-brand transition-colors shrink-0">
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span className="text-white/90 font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
