import React from 'react';
import { Award, BookOpen, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-light">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-2 text-primary-dark mb-4">Meet Pastor Jack Martin</h2>
          <p className="text-lg text-primary-gray">Specialist Wellness Counsellor ASCHP SWC18/327</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4 group">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-accent/10 rounded-sm group-hover:bg-primary-accent/20 transition-colors duration-300">
              <BookOpen className="h-6 w-6 text-primary-accent" />
            </div>
            <h3 className="text-xl font-medium text-primary-dark">Critical thinking & Faith</h3>
            <p className="text-primary-gray leading-relaxed">
              Journey began in science with degrees in microbiology and molecular biology, bringing a unique analytical perspective to counselling.
            </p>
          </div>
          
          <div className="space-y-4 group">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-accent/10 rounded-sm group-hover:bg-primary-accent/20 transition-colors duration-300">
              <Award className="h-6 w-6 text-primary-accent" />
            </div>
            <h3 className="text-xl font-medium text-primary-dark">Theological Insight</h3>
            <p className="text-primary-gray leading-relaxed">
              Well-versed in systematic theology and biblical studies, providing a solid foundation for spiritual guidance.
            </p>
          </div>
          
          <div className="space-y-4 group">
            <div className="w-12 h-12 flex items-center justify-center bg-primary-accent/10 rounded-sm group-hover:bg-primary-accent/20 transition-colors duration-300">
              <Heart className="h-6 w-6 text-primary-accent" />
            </div>
            <h3 className="text-xl font-medium text-primary-dark">Compassionate Approach</h3>
            <p className="text-primary-gray leading-relaxed">
              Sessions characterized by warmth, compassion, and a non-judgmental atmosphere for spiritual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;