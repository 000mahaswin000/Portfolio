import { motion } from 'motion/react';
import { Mail, MapPin, Linkedin, Github, Instagram, Phone } from 'lucide-react';
import { useInView } from './useInView';

export function Contact() {
  const [ref, isInView] = useInView();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gmail.com/mahaswin',
      link: 'mailto:mahaswin290208@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mahaswin',
      link: 'https://linkedin.com/in/mahaswin-d-aa19a33a1',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mahaswin',
      link: 'https://github.com/000mahaswin000',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'instagram.com/mahaswin',
      link: 'https://www.instagram.com/000___ash___000/',
    },
    {
      icon: Phone,
      label: 'Whatsapp',
      value: 'whatsapp.com/mahaswin',
      link: 'https://wa.me/917305362908',
    },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-purple-400/30 shadow-2xl shadow-purple-500/20">
            <p className="text-gray-200 text-center mb-8 text-base md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="p-3 bg-purple-500/30 rounded-lg border border-purple-400/50"
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      <Icon size={24} className="text-purple-300" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-300">{item.label}</p>
                      <p className="text-gray-100">{item.value}</p>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + 0.1 * index, type: "spring" }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-purple-900/20 rounded-xl hover:bg-purple-900/30 transition-all duration-300 border border-purple-400/20 hover:border-purple-400/40"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="p-4 bg-purple-900/20 rounded-xl border border-purple-400/20">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 text-gray-300"
      >
        <p>&copy; 2026 Mahaswin. All rights reserved.</p>
      </motion.footer>
    </section>
  );
}