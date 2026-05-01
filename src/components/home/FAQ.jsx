const faqData = [
  {
    question: "What exactly is the SkillSphere?",
    answer:
      "The SkillSphere is a flexible learning space designed for regular practice, conversation, and long-term language growth.",
  },
  {
    question: "Do I need to be a beginner?",
    answer:
      "No, our content is designed to accommodate all skill levels, from absolute beginners to advanced learners.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Yes, you can cancel your membership at any time directly from your account settings.",
  },
  {
    question: "How often is new content added?",
    answer:
      "We add fresh, high-quality learning content every single week to keep your practice consistent.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "All live Zoom sessions are recorded and saved. You can watch them anytime after they happen. You do not have to attend live.",
  },
  {
    question: "How much time should I realistically plan for regular practice?",
    answer:
      "We recommend dedicating at least 5-8 hours per week to see consistent progress.",
  },
];

const FAQ = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          FAQ
        </h2>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-white border border-gray-100 shadow-sm rounded-2xl h-fit"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-lg font-semibold text-gray-900 peer-checked:text-purple-600 transition-colors">
                {item.question}
              </div>
              <div className="collapse-content text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
