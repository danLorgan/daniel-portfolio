import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import weatherImg from '../assets/download.jpg'
import realEstateImg from '../assets/realestate.jpg'
import bank from '../assets/bank.png'


const projects = [
  {
    title: 'Real estate',
    description: 'A modern, fully responsive real estate website designed to help users find their dream home.',
    tags: ['HTML5', 'CSS3', 'Javascript'],
    image: realEstateImg,
    liveUrl: 'https://danlorgan.github.io/Homeverse-main/',
    codeUrl: 'https://github.com/danLorgan/Homeverse-main'
  },
  {
    title: 'HookBank',
    description: 'HooBank - Modern UI/UX website using React.js & Tailwind CSS',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: bank,
    liveUrl: 'https://github.com/danLorgan/project_hoobank-main',
    codeUrl: 'https://github.com/danLorgan/project_hoobank-main'
  },
  {
    title: 'Weather App',
    description: '🌦️ Real-time weather at your fingertips. Instant weather updates for any city worldwide.',
    tags: ['HTML5', 'CSS3', 'Javascript', 'API'],
    image: weatherImg,
    liveUrl: ' https://danlorgan.github.io/checkWeather/',
    codeUrl: ' https://github.com/danLorgan/checkWeather'
  }
]

const Work = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built with a focus on user experience, performance, and clean code.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    <FiGithub className="mr-1" /> View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work