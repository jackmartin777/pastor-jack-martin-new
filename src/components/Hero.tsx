import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-hero-pattern bg-cover bg-center bg-fixed flex items-center">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <h1 className="heading-1">
            Non-judgmental support in a safe online space
          </h1>
          <p className="text-lg font-light opacity-90">
            Specialist Wellness Counsellor · ASCHP SWC18/327
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Book a Session
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="btn-secondary inline-flex items-center justify-center gap-2 group"
            >
              Learn More
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;