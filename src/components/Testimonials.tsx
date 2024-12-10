import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Pastor Jack's unique blend of scientific understanding and spiritual wisdom helped me find clarity in my faith journey.",
      author: "Sarah M.",
      role: "Counselling Client"
    },
    {
      quote: "The online sessions are convenient and just as impactful as in-person counselling. A true blessing in my life.",
      author: "David R.",
      role: "Ministry Member"
    },
    {
      quote: "His approach to biblical counselling is both compassionate and practical. I've gained valuable tools for my spiritual growth.",
      author: "Rachel T.",
      role: "Wellness Program Participant"
    }
  ];

  return (
    <section className="section-padding bg-gradient-gray">
      <div className="container-padding">
        <h2 className="heading-2 text-center text-primary-dark mb-16">Client Experiences</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
              <Quote className="h-8 w-8 text-primary-accent mb-6 opacity-50" />
              <blockquote className="text-primary-gray mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-medium text-primary-dark">{testimonial.author}</p>
                <p className="text-sm text-primary-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;