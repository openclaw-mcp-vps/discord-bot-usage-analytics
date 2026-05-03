export default function Page() {
  const faqs = [
    {
      q: 'Which Discord bots are supported?',
      a: 'Any bot that uses Discord\'s API — including MEE6, Dyno, Carl-bot, custom bots, and more. We track command usage and interactions via webhooks.'
    },
    {
      q: 'How is data collected?',
      a: 'You add our webhook to your Discord server. We capture bot command events and member interactions in real time, then surface them in your dashboard.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel from your billing portal at any time. No contracts, no questions asked.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Discord Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track which Discord bots<br />
          <span className="text-[#58a6ff]">actually provide value</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          See real command usage, member engagement, and ROI for every bot in your server — so you stop paying for tools nobody uses.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $9 / month
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to start your free trial.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl bg-[#161b22] p-6">
          {[['10k+', 'Commands tracked daily'], ['< 1s', 'Webhook latency'], ['100%', 'Discord API compliant']].map(([val, label]) => (
            <div key={label}>
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-center text-2xl font-bold text-white mb-8">Simple pricing</h2>
        <div className="border border-[#58a6ff] rounded-2xl bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, per server</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited bot tracking',
              'Real-time command analytics',
              'Member engagement reports',
              'Weekly email digests',
              'Webhook + API access',
              'Priority support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-center text-2xl font-bold text-white mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Discord Bot Analytics. All rights reserved.
      </footer>
    </main>
  )
}
