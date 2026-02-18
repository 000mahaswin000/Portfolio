import { motion } from 'motion/react';
import { useInView } from './useInView';

export function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
              I'm a passionate master's degree student specializing in Computer Science with a focus on 
              artificial intelligence and machine learning. My journey in technology is driven by curiosity 
              and the desire to push the boundaries of what's possible.
            </p>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
              With a strong foundation in software development and data science, I'm constantly exploring 
              new technologies and methodologies. My research interests include deep learning, natural 
              language processing, and computer vision.
            </p>
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              When I'm not coding or researching, you can find me contributing to open-source projects, 
              attending tech conferences, or stargazing – both literally and figuratively!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}