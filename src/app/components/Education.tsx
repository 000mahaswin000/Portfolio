import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useInView } from './useInView';

export function Education() {
  const [ref, isInView] = useInView();

  const education = [
    {
      degree: 'Master of Technology in Computer Science (5 Years Integrated)',
      institution: 'SSN Collage of Engineering',
      period: '2025 - Present',
      description: 'Specialization in Artificial Intelligence and Machine Learning. GPA: 8.15/10.0',
      highlights: [
        'Research focus on Deep Learning architectures',
        'Teaching Assistant for Data Structures course',
        'Published paper on Neural Network optimization',
      ],
    },
    {
      degree: 'Higher Secondary Education (Class 11-12)',
      institution: 'Sri Kalaimagal Vidyamandir Matric Hr Sec School',
      period: '2023 - 2024',
      description: 'Achieved 95.8% in Higher Secondary Examinations (575/600) with Distinction',
      highlights: [
        'Specialized in Science stream',
        'Excellent performance in Mathematics and Physics',
      ],
    },
    {
      degree: 'Secondary School (LKG to Class 10)',
      institution: 'Madanlal Khemani Vivekananda Vidyalaya',
      period: '2011 - 2023',
      description: 'Completed 12 years of foundational schooling and graduated with 85% (510/600) in 10 CBSE board',
      highlights: [
        'Developed a strong foundational base in logical reasoning and core sciences',
        'Actively involved in school-level extracurriculars and foundational skill-building workshops',
      ],
    },
    
  ];

  return (
    <section id="education" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-2xl shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <motion.div 
                  className="p-3 bg-purple-500/30 rounded-xl border border-purple-400/50 w-fit"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <GraduationCap size={32} className="text-purple-300" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-purple-200 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-200 mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>

                  <p className="text-gray-200 mb-4">{edu.description}</p>

                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 * index + 0.1 * i }}
                      >
                        <span className="text-purple-300 mt-1">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}