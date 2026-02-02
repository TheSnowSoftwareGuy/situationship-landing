import { useState } from 'react'

const faqs = [
  {
    question: 'Is this actually accurate?',
    answer: 'Yes — our AI analyzes texting patterns, response times, conversation initiation, emotional engagement, and more. While no algorithm can read minds, our analysis is based on behavioral data points that relationship experts agree are strong indicators of interest.',
  },
  {
    question: 'Is my conversation private?',
    answer: "Absolutely. Your text screenshots are processed in real-time and immediately deleted after analysis. We never store your conversations, and your data is never shared with third parties. We couldn't read your texts even if we wanted to.",
  },
  {
    question: 'What messaging apps work?',
    answer: 'Any! iMessage, WhatsApp, Instagram DMs, Facebook Messenger, Snapchat, Telegram — if you can screenshot it, we can analyze it. Just upload clear screenshots of your conversation.',
  },
  {
    question: 'How much does it cost?',
    answer: 'The quiz is completely free — no signup required. Full AI text analysis starts at $2.99 per conversation. We also offer unlimited analysis subscriptions for the serial situationship investigators.',
  },
  {
    question: 'Can I analyze multiple conversations?',
    answer: 'Yes! Whether you\'re comparing two potential matches or tracking how one person\'s interest changes over time, you can analyze as many conversations as you want.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 px-6 bg-dark-card relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-white/60 text-lg">
            Everything you need to know
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-dark border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-semibold text-white/90 pr-4">{faq.question}</span>
                <span className={`text-white/40 text-xl transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-5 text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
