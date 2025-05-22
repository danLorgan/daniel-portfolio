import { motion } from 'framer-motion'
import { FiCode, FiSearch, FiLayers, FiPenTool } from 'react-icons/fi'

const services = [
  {
    icon: <FiCode className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Tailwind CSS.',
    features: ['Responsive Design', 'Performance Optimized', 'Clean Code']
  },
  {
    icon: <FiSearch className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Improve your website visibility on search engines with technical SEO and content optimization.',
    features: ['Keyword Research', 'On-Page SEO', 'Performance Audit']
  },
  {
    icon: <FiLayers className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces designed with a focus on user experience.',
    features: ['Wireframing', 'Prototyping', 'User Testing']
  },
  {
    icon: <FiPenTool className="w-8 h-8" />,
    title: 'Graphic Design',
    description: 'Eye-catching visuals for your brand including logos, banners, and marketing materials.',
    features: ['Brand Identity', 'Print Design', 'Digital Graphics']
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of services to help your business establish a strong online presence.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className={`w-2 h-2 rounded-full mr-2 ${index % 2 === 0 ? 'bg-blue-600 dark:bg-blue-400' : 'bg-purple-600 dark:bg-purple-400'}`}></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services