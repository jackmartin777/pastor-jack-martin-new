import React from 'react';
import { GraduationCap, Heart, BookOpen, Award } from 'lucide-react';

const Biography = () => {
  return (
    <section className="py-24 bg-gradient-cream">
      <div className="container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-light text-primary-navy mb-4">A Journey of Grace</h2>
          <p className="text-lg text-primary-gray">
            Pastor Jack Martin is a wellness counsellor dedicated to guiding individuals and families
            towards hope, healing, and a fulfilling life in Christ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: GraduationCap,
              title: "Academic Excellence",
              content: "With a strong foundation in microbiology and cellular and molecular biology from Stellenbosch University, Pastor Jack brings a unique scientific perspective to his practice. Currently pursuing his M.Div, he combines academic rigor with spiritual wisdom."
            },
            {
              icon: Award,
              title: "Professional Certification",
              content: "As a Certified Specialist Wellness Counsellor with the ASCHP (Association for Supportive Counsellors & Holistic Practitioners), Pastor Jack maintains the highest standards of professional practice and ethical conduct."
            },
            {
              icon: Heart,
              title: "Ministry Approach",
              content: "As a Ministry Coordinator at MyFiladelfia Biblical Counselling and Training, Pastor Jack's genuine love for people, exceptional listening skills, and insightful guidance have made him a sought-after counsellor and trainer."
            },
            {
              icon: BookOpen,
              title: "Expertise & Vision",
              content: "Pastor Jack's approach integrates his extensive knowledge of systematic theology, qualitative research, and biblical studies. His counselling philosophy is grounded in the belief that every individual has a unique purpose and potential in God, helping them find hope and healing through Christ-centered guidance."
            }
          ].map((item, index) => (
            <div key={index} className="group hover:transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white p-8 rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-accent/10 p-3 rounded-sm group-hover:bg-primary-accent/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary-accent" />
                  </div>
                  <h3 className="text-xl font-medium text-primary-navy">{item.title}</h3>
                </div>
                <p className="text-primary-gray leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Biography;