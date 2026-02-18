import { motion } from 'motion/react';
import { Menu, X, Download } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Education', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    // Download a sample PDF resume
    // In a real application, you would link to an actual PDF file
    const link = document.createElement('a');
    // Using a data URL for a minimal PDF
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj
2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj
3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj
4 0 obj
<<
/Length 440
>>
stream
BT
/F1 24 Tf
50 750 Td
(JOHN STELLAR) Tj
0 -30 Td
/F1 14 Tf
(Master's Degree Student - Computer Science) Tj
0 -40 Td
(EDUCATION) Tj
0 -20 Td
/F1 12 Tf
(Master of Science in Computer Science \\(2024 - Present\\)) Tj
0 -15 Td
(University of Technology) Tj
0 -30 Td
/F1 14 Tf
(SKILLS) Tj
0 -20 Td
/F1 12 Tf
(Programming: Python, JavaScript, TypeScript, C++, Java, R) Tj
0 -15 Td
(Machine Learning: TensorFlow, PyTorch, Scikit-learn, Keras) Tj
0 -15 Td
(Web Development: React, Node.js, Next.js, FastAPI) Tj
ET
endstream
endobj
5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000270 00000 n
0000000760 00000 n
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
847
%%EOF`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = 'John_Stellar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-purple-500/30"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Portfolio
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => scrollToSection(item)}
              className="text-gray-200 hover:text-purple-300 transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
            </motion.button>
          ))}
          
          {/* Resume Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 rounded-lg border border-purple-400/50 text-gray-200 transition-all duration-300"
          >
            <Download size={18} />
            Resume
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-200"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/60 backdrop-blur-lg border-t border-purple-500/30"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-200 hover:text-purple-300 transition-colors duration-300 text-left"
              >
                {item}
              </button>
            ))}
            
            {/* Resume Button for Mobile */}
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 rounded-lg border border-purple-400/50 text-gray-200 transition-all duration-300 w-fit"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}