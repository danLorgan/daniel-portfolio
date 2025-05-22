import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/danLorgan/' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/' },
    { icon: <FiTwitter />, url: 'https://twitter.com/youruser' },
    { icon: <FiDribbble />, url: 'https://dribbble.com/' },
  ]

  return (
    <section id="home" className="py-14 sm:py-16 md:py-20 lg:py-28 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.5rem] lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 leading-tight text-gray-800 dark:text-gray-300">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Daniel</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-5 text-gray-600 dark:text-gray-300">
              Frontend Developer & UI/UX Designer
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl mb-5 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              I create beautiful, functional websites and applications with modern technologies. 
              Specializing in React, Tailwind CSS, and Firebase backend solutions.
            </p>
            
            <div className="flex flex-col xs:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
              <a 
                href="#contact" 
                className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <HiOutlineMail className="mr-2 text-lg" /> Hire Me
              </a>
              <a 
                href="#work" 
                className="px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                View Work
              </a>
            </div>
          </motion.div>
          
          {/* Image/Social Links */}
          <motion.div 
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center relative"
          >
            <div className="relative w-50 h-50 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="w-full h-full bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden border-4 border-blue-200 dark:border-blue-700">
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                  <span className="text-5xl sm:text-6xl">👨‍💻</span>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 bg-white dark:bg-gray-800 p-2 sm:p-3 rounded-full shadow-lg">
                <div className="flex gap-1 sm:gap-2">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 sm:p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                      aria-label={`${link.icon.type.name} profile`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero