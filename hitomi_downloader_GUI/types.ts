export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface Education {
  school: string;
  major: string;
  period: string;
  status: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  duration?: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  outcome: string;
}

export interface SelfIntro {
  title: string;
  content: string;
}

export interface ResumeData {
  name: string;
  title: string;
  birthYear: string;
  summary: string;
  contact: ContactInfo;
  skills: string[];
  certifications: Certification[];
  education: Education[];
  experience: WorkExperience[];
  selfIntroduction: SelfIntro[];
  salaryExpectation: string;
}
