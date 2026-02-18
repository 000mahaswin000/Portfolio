import { motion } from 'motion/react';
import { Code, Database, Brain, Globe } from 'lucide-react';
import { useInView } from './useInView';

export function Skills() {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'R'],
      color: 'purple',
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLP'],
      color: 'pink',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Neo4j', 'Firebase'],
      color: 'blue',
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'Node.js', 'Next.js', 'FastAPI', 'Django', 'Tailwind'],
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      purple: {
        bg: 'bg-purple-500/30',
        border: 'border-purple-400/50',
        text: 'text-purple-300',
      },
      pink: {
        bg: 'bg-pink-500/30',
        border: 'border-pink-400/50',
        text: 'text-pink-300',
      },
      blue: {
        bg: 'bg-blue-500/30',
        border: 'border-blue-400/50',
        text: 'text-blue-300',
      },
      cyan: {
        bg: 'bg-cyan-500/30',
        border: 'border-cyan-400/50',
        text: 'text-cyan-300',
      },
    };
    return colors[color] || colors.purple;
  };

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30 shadow-2xl shadow-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-2 ${colors.bg} rounded-lg border ${colors.border}`}
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <Icon size={24} className={colors.text} />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * index + 0.05 * i, type: "spring" }}
                      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm border ${colors.border} cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}