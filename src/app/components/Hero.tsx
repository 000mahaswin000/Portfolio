import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content on the left */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              HELLO, I’M
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
            >
              D.Mahaswin
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-2"
            >
              Master's Student in Computer Science
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Exploring the universe of artificial intelligence and machine learning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/000mahaswin000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-purple-500/20 hover:bg-purple-500/30 rounded-full border border-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="text-purple-400" />
              </a>
              <a
                href="https://linkedin.com/in/mahaswin-d-aa19a33a1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-500/20 hover:bg-blue-500/30 rounded-full border border-blue-500/50 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="text-blue-400" />
              </a>
              <a
                href="mailto:mahaswin290208@gmail.com"
                className="p-3 bg-pink-500/20 hover:bg-pink-500/30 rounded-full border border-pink-500/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="text-pink-400" />
              </a>
            </motion.div>
          </div>

          {/* Photo on the right */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg shadow-purple-500/50">
              <img
                src="https://images.unsplash.com/photo-1653832154869-3fe99be65998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBoZWxtZXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEzMzA5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-purple-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}