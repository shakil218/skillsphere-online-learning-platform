"use client"
import { motion } from "framer-motion";

const plans = [
  {
    plan_id: "monthly",
    title: "Monthly",
    price: 29,
    billing_cycle: "mo",
    description: "Try the lab with full flexibility and explore how the format works for you.",
    highlight: false
  },
  {
    plan_id: "3_months",
    title: "3 Months",
    price: 79,
    billing_cycle: "3 mo",
    description: "Stay engaged and keep practicing over time.",
    monthly_equivalent: "~$26 per month",
    highlight: true // Recommended Plan
  },
  {
    plan_id: "6_months",
    title: "6 Months",
    price: 149,
    billing_cycle: "6 mo",
    description: "For long-term learners who want steady progress.",
    monthly_equivalent: "~$25 per month",
    highlight: false
  }
];

const Membership=()=> {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Membership</h2>
          <p className="text-lg text-gray-600">Simple pricing. Cancel anytime. Access while your membership is active</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.plan_id} 
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col ${
                plan.highlight 
                  ? "border-purple-600 shadow-xl scale-105 bg-purple-50" 
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className="text-gray-500 ml-2">/ {plan.billing_cycle}</span>
              </div>
              
              {plan.monthly_equivalent && (
                <p className="text-sm font-semibold text-purple-600 mb-6">{plan.monthly_equivalent}</p>
              )}
              
              <p className="text-gray-600 mb-8 grow">{plan.description}</p>
              
              <motion.button whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }} className={`relative btn w-full py-4 rounded-lg  text-white font-semibold overflow-hidden transition ${
                plan.highlight 
                  ? "bg-purple-600 hover:bg-purple-700" 
                  : "bg-[linear-gradient(135deg,#4b5964,#2f3a42,#0f1113)]"
              }`}>
                <div className="absolute inset-0 w-[200%] h-[200%] bg-linear-to-br from-white/60 via-white/30 to-transparent -translate-x-full -translate-y-full animate-glow transition-all"></div>
                <span className="relative z-10">Join {plan.title}</span>
                
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;