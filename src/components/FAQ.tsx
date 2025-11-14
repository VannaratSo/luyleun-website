"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import TextReveal from "./TextReveal";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How quickly can I get approved for a loan?",
    answer:
      "Our AI-powered system can approve your loan application in as little as 30 seconds. Once approved, funds are typically transferred to your account within minutes.",
    category: "Application Process",
  },
  {
    id: 2,
    question: "What are the eligibility requirements?",
    answer:
      "You must be at least 18 years old, have a valid ID, a steady source of income, and an active bank account. Our flexible criteria accommodate various financial situations.",
    category: "Eligibility",
  },
  {
    id: 3,
    question: "What interest rates do you offer?",
    answer:
      "Our competitive interest rates start from as low as 3.5% APR and vary based on your credit profile, loan amount, and repayment term. You'll see your personalized rate before accepting any loan.",
    category: "Rates & Fees",
  },
  {
    id: 4,
    question: "How much can I borrow?",
    answer:
      "Loan amounts range from $500 to $50,000, depending on your income, credit history, and repayment capacity. Our smart system will calculate the optimal amount for your situation.",
    category: "Loan Terms",
  },
  {
    id: 5,
    question: "Is my personal information secure?",
    answer:
      "Yes, we use bank-level 256-bit SSL encryption and follow strict data protection protocols. Your information is never sold to third parties and is stored securely in compliance with financial regulations.",
    category: "Security",
  },
  {
    id: 6,
    question: "Can I pay off my loan early?",
    answer:
      "Absolutely! You can pay off your loan early without any prepayment penalties. This can help you save on interest charges and improve your credit profile.",
    category: "Repayment",
  },
  {
    id: 7,
    question: "What happens if I miss a payment?",
    answer:
      "We understand life happens. Contact us immediately if you anticipate difficulty making a payment. We offer flexible payment plans and will work with you to find a solution that fits your situation.",
    category: "Repayment",
  },
  {
    id: 8,
    question: "Do you check my credit score?",
    answer:
      "We perform a soft credit check during pre-qualification, which won't affect your credit score. A hard credit check is only done when you accept a loan offer, which may temporarily impact your score.",
    category: "Credit",
  },
];

const categories = Array.from(new Set(faqData.map((item) => item.category)));

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFAQs =
    selectedCategory === "All"
      ? faqData
      : faqData.filter((item) => item.category === selectedCategory);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-white dark:bg-black py-16 px-4 relative overflow-hidden min-h-[600px] flex items-center">
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl text-black dark:text-white lg:text-left max-w-4xl mb-5"
          >
            Got Questions? We've Got Answers.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl text-black dark:text-white lg:text-left max-w-4xl"
          >
            Find quick answers to common questions about our loan services,
            application process, and terms.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === "All"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white/20 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/30 dark:border-white/10 hover:bg-blue-50/50 dark:hover:bg-white/10"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/20 dark:bg-white/5 backdrop-blur-sm text-gray-700 dark:text-gray-300 border border-white/30 dark:border-white/10 hover:bg-blue-50/50 dark:hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center shrink-0">
                      <Icon
                        icon="heroicons:question-mark-circle"
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <motion.div
                      animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon
                        icon="heroicons:plus"
                        className="w-6 h-6 text-gray-400 dark:text-gray-500"
                      />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-12">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact CTA */}
      </div>
    </section>
  );
}
