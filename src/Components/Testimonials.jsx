import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import Mine from '../assets/mine.png'
import Jine from '../assets/jinee.png'
import Dine from '../assets/Dine.png'


const testimonials = [
  {
    name: 'Joseph',
    role: 'Managing Director Company M',
    content: 'Working with  was a game-changer for our business. The website they built exceeded our expectations in both design and functionality.',
    rating: 5,
    image: Jine
  },
  {
    name: 'David',
    role: 'Marketing Director, Company X',
    content: 'The SEO work done by Daniel significantly improved our search rankings. Their attention to detail is impressive.',
    rating: 4,
    image: Dine
  },
  {
    name: 'Maxwell',
    role: 'Founder, Startup C',
    content: 'The UI/UX designs provided were exactly what we needed to improve our user engagement metrics. Highly recommended!',
    rating: 5, 
    image: Mine
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working with me.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12  overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className=" object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-500'}`} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials