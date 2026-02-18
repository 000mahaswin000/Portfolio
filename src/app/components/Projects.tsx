import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './useInView';

export function Projects() {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: 'Neural Network Optimizer',
      description:
        'Advanced optimization algorithms for deep learning models, achieving 30% faster convergence on benchmark datasets.',
      tags: ['Python', 'PyTorch', 'Machine Learning'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-purple-600/30 to-pink-600/30',
    },
    {
      title: 'Smart Recommendation Engine',
      description:
        'AI-powered recommendation system using collaborative filtering and deep learning techniques for personalized content suggestions.',
      tags: ['TensorFlow', 'Python', 'React'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-blue-600/30 to-cyan-600/30',
    },
    {
      title: 'Natural Language Processor',
      description:
        'NLP tool for sentiment analysis and text classification with transformer-based architecture achieving 95% accuracy.',
      tags: ['NLP', 'BERT', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-pink-600/30 to-purple-600/30',
    },
    {
      title: 'Computer Vision App',
      description:
        'Real-time object detection and image segmentation application using state-of-the-art CNN architectures.',
      tags: ['OpenCV', 'YOLO', 'Flask'],
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-cyan-600/30 to-blue-600/30',
    },
  ];

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${project.gradient} backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 shadow-2xl shadow-purple-500/20 transition-all duration-300`}
            >
              <h3 className="text-xl md:text-2xl font-bold text-purple-200 mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-200 mb-4 text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * i, type: "spring" }}
                    className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs md:text-sm border border-purple-400/40"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500/30 hover:bg-purple-500/40 rounded-lg border border-purple-400/50 text-purple-200 transition-all duration-300 text-sm"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500/30 hover:bg-pink-500/40 rounded-lg border border-pink-400/50 text-pink-200 transition-all duration-300 text-sm"
                >
                  <ExternalLink size={16} />
                  Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}