import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi'

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FiTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FiDribbble />, url: 'https://dribbble.com/yourusername' },
  ]

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Daniel</h2>
            <p className="text-gray-400">Full Stack Developer & UI/UX Designer</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Daniel. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer