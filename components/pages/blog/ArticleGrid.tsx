'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

const articles = [
  { cat: 'Educational', title: 'What is A2P SMS? A Guide for Wholesale Buyers', excerpt: 'The fundamentals of Application-to-Person messaging — what it is, how it differs from P2P, and what wholesale buyers need to know before choosing a provider.', author: 'Editorial', date: 'Mar 2026', time: '6 min' },
  { cat: 'Educational', title: 'How STIR/SHAKEN Works — and What It Means for Your Voice Traffic', excerpt: 'The FCC mandate explained. How caller ID authentication affects termination quality, ASR, and carrier relationships.', author: 'Editorial', date: 'Mar 2026', time: '7 min' },
  { cat: 'Educational', title: 'eSIM vs Physical SIM for MVNOs: A Wholesale Buyer\'s Guide', excerpt: 'The practical differences, the certification requirements, and the business case for making the switch.', author: 'Editorial', date: 'Feb 2026', time: '9 min' },
  { cat: 'Educational', title: 'What Is a DID Number and How Does It Work?', excerpt: 'Direct Inward Dialing explained — from SIP trunks to PSTN interconnects to number porting.', author: 'Editorial', date: 'Feb 2026', time: '5 min' },
  { cat: 'Educational', title: 'How Airtime Top-Up APIs Work: A Technical Primer', excerpt: 'MSISDN validation, operator lookup, retry logic, and webhook confirmation — the full stack explained.', author: 'Editorial', date: 'Jan 2026', time: '6 min' },
  { cat: 'Comparison', title: 'Best Wholesale Voice Termination Providers in 2026', excerpt: 'A fact-based comparison of the top wholesale voice carriers — coverage, quality metrics, pricing, and compliance posture.', author: 'Editorial', date: 'Jan 2026', time: '12 min' },
  { cat: 'Comparison', title: 'Twilio Alternative for Wholesale SMS: A Carrier Perspective', excerpt: 'Why CPaaS platforms like Twilio aren\'t built for carrier-to-carrier SMS relationships — and what wholesale-native alternatives look like.', author: 'Editorial', date: 'Dec 2025', time: '8 min' },
  { cat: 'Comparison', title: 'DIDWW Alternative for Wholesale DID Numbers', excerpt: 'Comparing DID wholesale providers on coverage, porting, pricing, and API quality.', author: 'Editorial', date: 'Dec 2025', time: '7 min' },
  { cat: 'Compliance', title: '10DLC Compliance Checklist for SMS Resellers', excerpt: 'The exact steps to register brands and campaigns for 10DLC. What T-Mobile, AT&T, and Verizon require — and what happens when you don\'t comply.', author: 'Editorial', date: 'Nov 2025', time: '10 min' },
  { cat: 'Regulatory', title: 'African Telecom Licensing in 2026: What Operators Need to Know', excerpt: 'Country-by-country licensing overview for Nigeria, Kenya, South Africa, Ghana, Tanzania, and Egypt.', author: 'Editorial', date: 'Nov 2025', time: '11 min' }
];

const getCategoryColor = (cat: string) => {
  const colors: Record<string, string> = {
    'Educational': 'bg-cyan-DEFAULT/10 text-cyan-DEFAULT',
    'Compliance': 'bg-navy-50 text-navy-600',
    'Comparison': 'bg-navy-50 text-navy-600',
    'Market Intelligence': 'bg-cyan-DEFAULT/10 text-cyan-DEFAULT',
    'Case Studies': 'bg-navy-50 text-navy-600',
    'Regulatory': 'bg-navy-50 text-navy-600'
  };
  return colors[cat] || 'bg-navy-50 text-navy-600';
};

export default function ArticleGrid() {
  return (
    <section className="bg-white py-12">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.03 }}
              viewport={{ once: true }}
              className="bg-white border border-navy-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${getCategoryColor(article.cat)}`}>
                {article.cat}
              </span>

              <h3 className="text-navy-DEFAULT font-semibold text-lg mt-3 line-clamp-2 leading-snug">
                {article.title}
              </h3>

              <p className="text-navy-600 text-sm mt-2 line-clamp-2">
                {article.excerpt}
              </p>

              <div className="text-navy-400 text-xs mt-4 flex items-center gap-2">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.time}</span>
              </div>

              <a href="#" className="text-cyan-DEFAULT font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-3">
                Read article <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
