import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import cosmicBg from 'figma:asset/5fb2683f218fa75d957264411c3919850bc42757.png';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Cosmic space background with nebula */}
      <div className="fixed inset-0 z-0">
        {/* Main cosmic background image */}
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url(${cosmicBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Gradient overlay for depth */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-black/50"
        />
        
        {/* Animated floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>

        {/* Purple glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '4s' }} 
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '5s', animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '2s' }} 
        />
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}