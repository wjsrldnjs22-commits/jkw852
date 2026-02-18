import React from 'react';
import { User, Phone, Mail, MapPin, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Sidebar: React.FC = () => {
  const { name, title, contact, skills, certifications, salaryExpectation } = RESUME_DATA;

  return (
    <aside className="w-full md:w-[35%] print:w-[35%] bg-[#fcfdfc] border-b md:border-b-0 md:border-r print:border-b-0 print:border-r border-[#eff2f0] p-8 flex flex-col gap-8 md:min-h-[1200px] print:min-h-0">
      {/* Header Info */}
      <div className="flex flex-col gap-4">
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark mb-2 overflow-hidden mx-auto md:mx-0 print:bg-primary/20">
          <User size={48} strokeWidth={1.5} />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-black tracking-tight text-text-main mb-2">{name}</h1>
          <p className="text-primary-dark font-bold text-lg leading-snug mb-3">
            {title}
          </p>
          <div className="inline-block bg-primary/10 px-3 py-1 rounded-full text-xs font-semibold text-primary-dark print:border print:border-primary/20">
            희망연봉: {salaryExpectation}
          </div>
        </div>
      </div>

      <div className="h-px bg-[#eff2f0] w-full"></div>

      {/* Contact Info */}
      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-1">Contact</h3>
        
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark shrink-0 print:border print:border-primary/20">
            <Phone size={18} />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs text-text-muted">Phone</span>
            <span className="text-sm font-semibold text-text-main truncate">{contact.phone}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark shrink-0 print:border print:border-primary/20">
            <Mail size={18} />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs text-text-muted">Email</span>
            <span className="text-sm font-semibold text-text-main truncate" title={contact.email}>{contact.email}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark shrink-0 print:border print:border-primary/20">
            <MapPin size={18} />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-xs text-text-muted">Location</span>
            <span className="text-sm font-semibold text-text-main leading-tight">{contact.address}</span>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#eff2f0] w-full"></div>

      {/* Skills */}
      <div className="flex flex-col gap-4 print:break-inside-avoid">
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-1 flex items-center gap-2">
          <TrendingUp size={16} /> Skills & Tools
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary-dark text-sm font-medium border border-primary/20 print:bg-white print:border-primary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#eff2f0] w-full"></div>

      {/* Certifications */}
      <div className="flex flex-col gap-4 print:break-inside-avoid">
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted mb-1">Certifications</h3>
        <ul className="flex flex-col gap-4">
          {certifications.map((cert, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-0.5 text-primary">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <p className="text-sm font-bold text-text-main">{cert.name}</p>
                <p className="text-xs text-text-muted">{cert.issuer} | {cert.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-[#eff2f0] w-full block md:hidden print:hidden"></div>
    </aside>
  );
};