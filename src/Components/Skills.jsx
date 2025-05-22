import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiPenTool, FiBarChart2 } from 'react-icons/fi'

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode className="w-6 h-6" />,
    items: [
      { name: 'React', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 }
    ]
  },
  {
    category: 'Backend',
    icon: <FiDatabase className="w-6 h-6" />,
    items: [
      { name: 'Firebase', level: 90 },
      { name: 'Node.js', level: 50 },
      { name: 'Express', level: 30 },
      { name: 'MongoDB', level: 30 }
    ]
  },
  {
    category: 'Design',
    icon: <FiPenTool className="w-6 h-6" />,
    items: [
      { name: 'UI/UX', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe XD', level: 75 },
      { name: 'Photoshop', level: 70 }
    ]
  },
  {
    category: 'SEO',
    icon: <FiBarChart2 className="w-6 h-6" />,
    items: [
      { name: 'Keyword Research', level: 85 },
      { name: 'Technical SEO', level: 80 },
      { name: 'Content Strategy', level: 75 },
      { name: 'Analytics', level: 70 }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools to deliver high-quality solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${index % 4 === 0 ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' : 
                  index % 4 === 1 ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                  index % 4 === 2 ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' :
                  'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'}`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <div className="space-y-4">
                {skill.items.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${index % 4 === 0 ? 'bg-blue-600' : 
                          index % 4 === 1 ? 'bg-green-600' :
                          index % 4 === 2 ? 'bg-purple-600' :
                          'bg-yellow-600'}`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills