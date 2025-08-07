import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What is NFC technology?",
      answer:
        "NFC (Near Field Communication) allows devices to communicate wirelessly when close together, enabling contactless data sharing.",
    },
    {
      question: "Do I need an app for NFC keychains?",
      answer:
        "No, most smartphones support NFC out of the box. You simply tap the keychain to share data without needing a dedicated app.",
    },
    {
      question: "Can I customize my standee design?",
      answer:
        "Yes, our NFC-enabled standees can be fully customized to match your brand's identity and marketing goals.",
    },
    {
      question: "How secure is NFC technology?",
      answer:
        "NFC uses a secure communication protocol and works only within close range, reducing the risk of unauthorized access.",
    },
    {
      question: "Do NFC products work on all smartphones?",
      answer:
        "Most modern smartphones are NFC-enabled and can interact seamlessly with our NFC products.",
    },
    {
      question: "Can I track analytics with NFC standees?",
      answer:
        "Yes, our NFC standees can be integrated with analytics tools to track user interactions and engagement.",
    },
    {
      question: "What is the delivery time for custom NFC products?",
      answer:
        "Custom NFC products typically take 7-14 business days for delivery, depending on the complexity of your order.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#090040] mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-[#090040]">
                  {faq.question}
                </h3>
                <span className="text-2xl text-[#4F9DFF] transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer with Slide Down */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 p-0 px-6 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
