import React from 'react';
import { RESUME_DATA } from '../constants';

export const MainContent: React.FC = () => {
  const { summary, experience, selfIntroduction, education } = RESUME_DATA;

  return (
    <main className="w-full md:w-[65%] print:w-[65%] p-8 md:p-12 flex flex-col gap-10">
      
      {/* Professional Summary */}
      <section className="flex flex-col gap-4 print:break-inside-avoid">
        <div className="bg-primary-light px-4 py-2 rounded-lg border-l-4 border-primary w-full shadow-sm print:bg-primary-light print:shadow-none">
          <h2 className="text-lg font-bold text-text-main">Professional Summary</h2>
        </div>
        <p className="text-text-secondary leading-relaxed text-base whitespace-pre-line">
          {summary}
        </p>
      </section>

      {/* Work Experience */}
      <section className="flex flex-col gap-6">
        <div className="bg-primary-light px-4 py-2 rounded-lg border-l-4 border-primary w-full shadow-sm print:bg-primary-light print:shadow-none print:break-after-avoid">
          <h2 className="text-lg font-bold text-text-main">Work Experience</h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#eff2f0] last:border-0 group print:break-inside-avoid">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-4 border-white shadow-sm transition-colors ${index === 0 ? 'bg-primary' : 'bg-[#dfe2e0] group-hover:bg-primary/50'} print:bg-primary print:shadow-none`}></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl font-bold text-text-main">{job.company}</h3>
                <span className="text-sm font-medium text-text-muted bg-[#f2f3f2] px-2 py-1 rounded whitespace-nowrap mt-1 sm:mt-0 print:border print:border-gray-200">
                  {job.period}
                </span>
              </div>
              
              <p className={`font-semibold mb-3 ${index === 0 ? 'text-primary-dark' : 'text-text-secondary'} print:text-text-main`}>
                {job.position} <span className="text-text-muted text-sm font-normal ml-1">({job.duration})</span>
              </p>
              
              <ul className="list-disc pl-4 space-y-2 text-text-secondary text-sm leading-relaxed marker:text-primary-dark">
                {job.description.map((desc, i) => (
                  <li key={i}><span className="text-text-main opacity-90">{desc}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="flex flex-col gap-6 print:break-inside-avoid">
        <div className="bg-primary-light px-4 py-2 rounded-lg border-l-4 border-primary w-full shadow-sm print:bg-primary-light print:shadow-none">
          <h2 className="text-lg font-bold text-text-main">Education</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 print:border-gray-100 print:bg-transparent">
              <div>
                <h3 className="text-lg font-bold text-text-main">{edu.school}</h3>
                <p className="text-text-secondary text-sm">{edu.major} <span className="text-text-muted">| {edu.status}</span></p>
              </div>
              <span className="text-sm text-text-muted mt-1 sm:mt-0 font-medium bg-[#f2f3f2] px-2 py-0.5 rounded print:border print:border-gray-200">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Self Introduction */}
      <section className="flex flex-col gap-6">
        <div className="bg-primary-light px-4 py-2 rounded-lg border-l-4 border-primary w-full shadow-sm print:bg-primary-light print:shadow-none print:break-after-avoid">
          <h2 className="text-lg font-bold text-text-main">Self-Introduction (자기소개서)</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {selfIntroduction.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 print:break-inside-avoid">
              <h3 className="text-base font-bold text-text-main flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0 print:print-color-adjust"></span>
                {item.title}
              </h3>
              <div className="text-text-secondary text-sm leading-relaxed pl-4 border-l border-[#dfe2e0] whitespace-pre-line">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};