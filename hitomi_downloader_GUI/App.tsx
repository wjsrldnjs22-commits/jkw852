import React from 'react';
import { Download } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen">
      {/* Print/Download Button */}
      <div className="fixed bottom-8 right-8 z-50 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-primary-dark hover:bg-[#4a7a60] text-white px-6 py-4 rounded-full shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group border-2 border-white/20"
          title="PDF로 저장 / 인쇄"
          aria-label="PDF로 저장"
        >
          <Download size={24} className="group-hover:animate-bounce" />
          <span className="font-bold text-base">PDF 저장</span>
        </button>
      </div>

      <div className="container mx-auto py-10 px-4 md:px-8 max-w-[1100px] print:max-w-full print:p-0 print:py-0">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row print:flex-row min-h-[1200px] border border-[#e8ebe9] print:shadow-none print:rounded-none print:border-none print:min-h-0">
          <Sidebar />
          <MainContent />
        </div>
        
        <div className="mt-8 text-center text-text-muted text-xs print:hidden">
          <p>&copy; {new Date().getFullYear()} Resume Portfolio. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default App;