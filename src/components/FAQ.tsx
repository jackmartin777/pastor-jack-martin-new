import React from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is biblical counselling?",
      answer: "Biblical counselling integrates spiritual wisdom with practical guidance, helping individuals address life's challenges through a Christ-centered perspective while maintaining professional counselling standards."
    },
    {
      question: "How do online sessions work?",
      answer: "Online sessions are conducted via secure platforms like Zoom or Microsoft Teams. They offer the same level of care and attention as in-person sessions, with the added convenience of accessing support from anywhere."
    },
    {
      question: "What can I expect in my first session?",
      answer: "Your first session is an opportunity to share your story and concerns in a safe, non-judgmental space. We'll discuss your goals, establish a counselling framework, and develop an initial plan for your journey."
    },
    {
      question: "How does biblical counselling address mental health?",
      answer: "Biblical counselling recognizes both spiritual and psychological aspects of mental health, offering a holistic approach that combines professional counselling techniques with biblical wisdom and support."
    }
  ];

  return (
    <section className="section-padding bg-gradient-light">
      <div className="container-padding">
        <h2 className="heading-2 text-center text-primary-dark mb-16">Common Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-sm">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-primary-dark">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary-accent" />
                ) : (
                  <Plus className="h-5 w-5 text-primary-accent" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-primary-gray leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;